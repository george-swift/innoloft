export type TItem = {
  id: number | string;
  name: string;
};

export const TRLs: { [key: string]: string } = {
  'TRL 1': 'Basic principles observed',
  'TRL 2': 'Technology concept formulated',
  'TRL 3': 'Experimental proof of concept',
  'TRL 4': 'Technology validated in lab',
  'TRL 5': 'Technology validated in relevant environment',
  'TRL 6': 'Technology demonstrated in relevant environment',
  'TRL 7': 'System prototype demonstration in operational environment',
  'TRL 8': 'System complete and qualified',
  'TRL 9':
    'Actual system proven in operational environment (established product available)',
};

export const extractTRL = (definition: string) => definition.slice(0, 5);

export const isExistingTag = (list: TItem[], name: string) =>
  list.some(tag => tag.name === name);
