// import { createSchema, Type, typedModel, ExtractProps } from 'ts-mongoose';

// export const GoogleFileSchema = createSchema({
//   fileId: Type.string(),
//   fileName: Type.string(),
//   fileUrl: Type.string(),
//   hideFromEngineer: Type.boolean()
// });

// export const GoogleFolderSchema = createSchema({
//   id: Type.string(),
//   name: Type.string(),
//   url: Type.string()
// });

// export const ElementSchema = createSchema({
//   _id: Type.string(),
//   name: Type.string(),
//   description: Type.string(),
//   duration: Type.number({ required: true, default: 0 }),
//   price: Type.number({ required: true, default: 0 }),
//   priceWeekend: Type.number({ required: true, default: 0 }),
//   reference: Type.number()
// });

// export const WorkflowStepsSchema = createSchema({
//   numberOfDays: Type.optionalNumber(),
//   steps: Type.optionalArray().of(
//     Type.optionalObject().of({
//       type: Type.optionalObject().of({
//         action: Type.optionalString(),
//         percentage: Type.optionalNumber(),
//         delay: Type.optionalNumber(),
//         associatedRole: Type.optionalString()
//       }),
//       label: Type.optionalString()
//     })
//   )
// });

// export const RequirementsSchema = createSchema({
//   reqId: Type.string(),
//   quantity: Type.number(),
//   clientCost: Type.number(),
//   externalCost: Type.number()
// });

// export const WorkflowSchema = createSchema({
//   presite: Type.optionalSchema().of(WorkflowStepsSchema),
//   site: Type.optionalSchema().of(WorkflowStepsSchema),
//   postsite: Type.optionalSchema().of(WorkflowStepsSchema)
// });

// export const SamplesSchema = createSchema({
//   quantity: Type.optionalNumber(),
//   trackingCode: Type.optionalString(),
//   isUrgent: Type.optionalBoolean(),
//   isUrgentContact: Type.optionalString(),
//   isUrgentReason: Type.optionalString(),
//   analysisStartTime: Type.optionalDate(),
//   analysisEndTime: Type.optionalDate(),
//   qaStartTime: Type.optionalDate(),
//   qaEndTime: Type.optionalDate(),
//   qaAction: Type.string() as
//     | 'Urgent Attention Required'
//     | 'Repair/Encapsulate'
//     | 'Action Required'
//     | 'Removal Recommended'
//     | 'Material to be managed as asbestos'
//     | 'No asbestos detected'
//     | 'No suspect material identified',
//   qaIssues: Type.optionalBoolean(),
//   qaIssueType: Type.string() as
//     | 'Lab Issues'
//     | 'Surveyor Issues'
//     | 'Admin Issues'
//     | 'Other',
//   teamsReport: Type.optionalString()
// });

// export const ScheduleOfRatesSchema = createSchema({
//   _id: Type.string(),
//   title: Type.string(),
//   normalHourse: Type.optionalNumber({ default: 0 }),
//   weekend: Type.optionalNumber({ default: 0 }),
//   duration: Type.optionalNumber({ default: 0 }),
//   internalProcedure: Type.optionalString(),
//   description: Type.optionalString(),
//   reqSkills: Type.optionalArray().of(Type.string()),
//   teamsAppointmentType: Type.optionalString(),
//   teamsSurveyType: Type.optionalString(),
//   teamsPropertyType: Type.optionalString(),
//   teamsDistanceBand: Type.optionalString(),
//   numberOfPumps: Type.optionalNumber(),
//   teamsAirTestType: Type.optionalString(),
//   elements: Type.optionalArray().of(Type.string()),
//   reference: Type.optionalNumber()
// });

// export type ISamples = ExtractProps<typeof SamplesSchema>;
// export type IWorlflow = ExtractProps<typeof WorkflowSchema>;
// export type IRequirements = ExtractProps<typeof RequirementsSchema>;
// export type IGoogleFile = ExtractProps<typeof GoogleFileSchema>;
// export type IGoogleFolder = ExtractProps<typeof GoogleFolderSchema>;
// export type IElement = ExtractProps<typeof ElementSchema>;
// export type IScheduleOfRates = ExtractProps<typeof ScheduleOfRatesSchema>;
