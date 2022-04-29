import React from 'react';
import { StyledMapContainer, StyledIframe } from './styles';

/**
 * Stub implementation to avoid incurring billing on my GCP for Google Maps Embed API
 * @param {string} company Name of the company for geocoding
 * @return {string} An embeddable link to display map in an iframe
 */

const generateEmbeddedLink = (company: string): string => {
  const url = 'https://www.google.com/maps/';
  const query =
    'embed?pb=!1m18!1m12!1m3!1d2522.778501445403!2d6.098472215699994!3d50.779679471468405!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x47c09963c8e4ae6b%3A0xbb82ea0594132a59!2s';
  const params = `${company.replace(
    /\s/,
    '%',
  )}!5e0!3m2!1sen!2sng!4v1650977998404!5m2!1sen!2sng`;

  return url + query + params;
};

type MapProps = {
  company: string;
};

const Map = ({ company }: MapProps) => (
  <StyledMapContainer>
    <h3>Product Company Address</h3>
    <StyledIframe
      title={company}
      src={generateEmbeddedLink(company)}
      loading="lazy"
      referrerPolicy="no-referrer-when-downgrade"
      allowFullScreen
    />
  </StyledMapContainer>
);

export default Map;
