import React from 'react';
import Column from './footer/column';
import Credits from './footer/credits';
import { footerDetails } from './footer/footerData';
function Footer() {
  return (
    <div>
      <Column
        name={'Durban'}
        items={footerDetails.Durban.map((it) => {
          return <l1>{it}</l1>;
        })}
      />
      <Column
        name={'Features'}
        items={footerDetails.Features.map((it) => {
          return <l1>{it}</l1>;
        })}
      />
      <Column
        name={'Products'}
        items={footerDetails.Products.map((it) => {
          return <l1>{it}</l1>;
        })}
      />
      <Column
        name={'UseCases'}
        items={footerDetails.UseCases.map((it) => {
          return <l1>{it}</l1>;
        })}
      />
      <Column
        name={'Company'}
        items={footerDetails.Company.map((it) => {
          return <l1>{it}</l1>;
        })}
      />
      <Column
        name={'Resources'}
        items={footerDetails.Resources.map((it) => {
          return <l1>{it}</l1>;
        })}
      />
      <Credits />
    </div>
  );
}

export default Footer;
