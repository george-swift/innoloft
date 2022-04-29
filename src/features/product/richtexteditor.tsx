import React, { useMemo, useCallback, KeyboardEventHandler } from 'react';
import escapeHtml from 'escape-html';
import {
  createEditor,
  Editor,
  Transforms,
  Text,
  Descendant,
  BaseEditor,
} from 'slate';
import {
  Slate,
  Editable,
  ReactEditor,
  withReact,
  useSlate,
  RenderLeafProps,
  RenderElementProps,
} from 'slate-react';
import { HistoryEditor } from 'slate-history';
import { StyledToolbar, StyledRichTextButton } from './styles';

type CustomElement = { type: 'paragraph'; children: CustomText[] };
type CustomText = { text: string; bold?: true; italic?: true };

declare module 'slate' {
  interface CustomTypes {
    Editor: BaseEditor & ReactEditor & HistoryEditor;
    Element: CustomElement;
    Text: CustomText;
  }
}

const DefaultElement = (props: RenderElementProps) => (
  <p {...props.attributes}>{props.children}</p>
);

const CustomEditor = {
  isBoldMarkActive(editor: Editor) {
    const [match] = Editor.nodes(editor, {
      match: n => n.bold === true,
      universal: true,
    });

    return !!match;
  },

  isItalicMarkActive(editor: Editor) {
    const [match] = Editor.nodes(editor, {
      match: n => n.italic === true,
      universal: true,
    });

    return !!match;
  },

  toggleBoldMark(editor: Editor) {
    const isActive = CustomEditor.isBoldMarkActive(editor);
    Transforms.setNodes(
      editor,
      { bold: isActive ? null : true },
      { match: n => Text.isText(n), split: true },
    );
  },

  toggleItalicMark(editor: Editor) {
    const isActive = CustomEditor.isItalicMarkActive(editor);
    Transforms.setNodes(
      editor,
      { italic: isActive ? null : true },
      { match: n => Text.isText(n), split: true },
    );
  },
};

const Toolbar = () => {
  const editor = useSlate();
  return (
    <StyledToolbar>
      <StyledRichTextButton
        onMouseDown={e => {
          e.preventDefault();
          CustomEditor.toggleBoldMark(editor);
        }}
        active={CustomEditor.isBoldMarkActive(editor)}
      >
        Bold
      </StyledRichTextButton>
      <StyledRichTextButton
        onMouseDown={e => {
          e.preventDefault();
          CustomEditor.toggleItalicMark(editor);
        }}
        active={CustomEditor.isItalicMarkActive(editor)}
      >
        Italic
      </StyledRichTextButton>
    </StyledToolbar>
  );
};

const serialize = (node: Descendant): string => {
  if (Text.isText(node)) {
    let string = escapeHtml(node.text);
    if (node.bold) {
      string = `<strong>${string}</strong>`;
    }
    if (node.italic) {
      string = `<em>${string}</em>`;
    }
    return string;
  }

  const children = node.children.map(n => serialize(n)).join('');

  switch (node.type) {
    case 'paragraph':
      return `<p>${children}</p>`;
    default:
      return children;
  }
};

type RTEProps = {
  description: string;
  setter: React.Dispatch<string>;
};

const RichTextEditor = ({ description, setter }: RTEProps) => {
  const editor = useMemo(() => withReact(createEditor() as ReactEditor), []);

  const initialValue: CustomElement[] = [
    {
      type: 'paragraph',
      children: [{ text: description }],
    },
  ];

  const renderElement = useCallback(
    (props: RenderElementProps) => <DefaultElement {...props} />,
    [],
  );

  // Define a leaf rendering function that is memoized with `useCallback`.
  const renderLeaf = useCallback(
    ({ attributes, children, leaf }: RenderLeafProps) => (
      <span
        {...attributes}
        style={{
          fontWeight: leaf.bold ? 'bold' : 'normal',
          fontStyle: leaf.italic ? 'italic' : 'normal',
        }}
      >
        {children}
      </span>
    ),
    [],
  );

  const handleKeyDown: KeyboardEventHandler = e => {
    if (!e.ctrlKey) return;

    switch (e.key) {
      case 'i': {
        e.preventDefault();
        CustomEditor.toggleItalicMark(editor as Editor);
        break;
      }

      case 'b': {
        e.preventDefault();
        CustomEditor.toggleBoldMark(editor as Editor);
        break;
      }
    }
  };

  const handleChange = (value: Descendant[]) => {
    const isAstChange = editor.operations.some(
      op => op.type !== 'set_selection',
    );
    if (!isAstChange) return;
    const [node] = value;
    setter(serialize(node));
  };

  return (
    <Slate editor={editor} value={initialValue} onChange={handleChange}>
      <Toolbar />
      <Editable
        renderElement={renderElement}
        renderLeaf={renderLeaf}
        onKeyDown={handleKeyDown}
      />
    </Slate>
  );
};
export default RichTextEditor;
