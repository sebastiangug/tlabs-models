import { createSchema, Type, typedModel, ExtractProps } from 'ts-mongoose';

export const SiteObject = {
  _id: Type.optionalString({ required: true }),
  clientId: Type.optionalString({ required: true }),
  autoGenerated: Type.optionalBoolean(),
  title: Type.optionalString(),
  UPRN: Type.string({ required: true }),
  UPRNLabel: Type.string({ required: true }),
  postcode: Type.string({ required: true }),
  addressLine1: Type.string({ required: true }),
  city: Type.string({ required: true }),
  county: Type.string({ required: true }),
  mandatoryInduction: Type.boolean({ required: true }),
  createdAt: Type.optionalDate({
    required: true,
    default: new Date(Date.now())
  }),
  teamsId: Type.optionalString()
};

const SiteSchema = createSchema(SiteObject);

export const Site = typedModel('sites', SiteSchema);
export type ISite = ExtractProps<typeof SiteSchema>;