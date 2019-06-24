import { createSchema, Type, typedModel, ExtractProps } from 'ts-mongoose';

const OrderSchema = createSchema({
  _id: Type.string({ required: true }),
  status: Type.string({ required: true, default: 'draft' }),
  clientId: Type.string({ required: true }),
  site: Type.object({ required: true }).of({
    isNew: Type.boolean({ required: true }),
    UPRN: Type.string({ required: true }),
    UPRNLabel: Type.string({ required: true }),
    postcode: Type.string({ required: true }),
    addressLine1: Type.string({ required: true }),
    city: Type.string({ required: true }),
    county: Type.string({ required: true }),
    mandatoryInduction: Type.boolean({ required: true })
  }),
  survey: Type.object({ required: true }).of({
    scheduleId: Type.string({ required: true }),
    property: Type.optionalObject().of({
      type: Type.string({ required: true }),
      totalFloors: Type.number({ required: true }),
      allProperty: Type.object({ required: true }).of({
        flooring: Type.object({ required: true }).of({
          survey: Type.boolean({ required: true }),
          details: Type.optionalString()
        }),
        windows: Type.object({ required: true }).of({
          survey: Type.boolean({ required: true }),
          details: Type.optionalString()
        }),
        heating: Type.object({ required: true }).of({
          survey: Type.boolean({ required: true }),
          details: Type.optionalString()
        }),
        roof: Type.object({ required: true }).of({
          survey: Type.boolean({ required: true }),
          details: Type.optionalString()
        }),
        ceiling: Type.object({ required: true }).of({
          survey: Type.boolean({ required: true }),
          details: Type.optionalString()
        }),
        externalWalls: Type.object({ required: true }).of({
          survey: Type.boolean({ required: true }),
          details: Type.optionalString()
        }),
        intercom: Type.object({ required: true }).of({
          survey: Type.boolean({ required: true }),
          details: Type.optionalString()
        }),
        rewire: Type.object({ required: true }).of({
          survey: Type.boolean({ required: true }),
          details: Type.optionalString()
        })
      }),
      utilities: Type.object({ required: true }).of({
        boiler: Type.object({ required: true }).of({
          survey: Type.boolean({ required: true }),
          details: Type.optionalString()
        })
      }),
      kitchen: Type.object({ required: true }).of({
        furniture: Type.object({ required: true }).of({
          survey: Type.boolean({ required: true }),
          details: Type.optionalString()
        }),
        flooring: Type.object({ required: true }).of({
          survey: Type.boolean({ required: true }),
          details: Type.optionalString()
        }),
        detectors: Type.object({ required: true }).of({
          survey: Type.boolean({ required: true }),
          details: Type.optionalString()
        }),
        windows: Type.object({ required: true }).of({
          survey: Type.boolean({ required: true }),
          details: Type.optionalString()
        }),
        ceiling: Type.object({ required: true }).of({
          survey: Type.boolean({ required: true }),
          details: Type.optionalString()
        })
      }),
      bathroom: Type.object({ required: true }).of({
        toilet: Type.object({ required: true }).of({
          survey: Type.boolean({ required: true }),
          details: Type.optionalString()
        }),
        tiles: Type.object({ required: true }).of({
          survey: Type.boolean({ required: true }),
          details: Type.optionalString()
        })
      })
    })
  })
});

// mongoose usable schema
export const Order = typedModel('orders', OrderSchema);
// usable type extracted
export type IOrder = ExtractProps<typeof OrderSchema>;
