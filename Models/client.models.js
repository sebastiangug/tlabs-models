"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var ts_mongoose_1 = require("ts-mongoose");
var site_models_1 = require("./site.models");
var shared_models_1 = require("./shared.models");
var ClientSchema = ts_mongoose_1.createSchema({
    _id: ts_mongoose_1.Type.string(),
    TLAccount: ts_mongoose_1.Type.optionalString(),
    TLAdmin: ts_mongoose_1.Type.optionalString(),
    TLTechnical: ts_mongoose_1.Type.optionalString(),
    accountLimit: ts_mongoose_1.Type.optionalNumber(),
    accountStatus: ts_mongoose_1.Type.optionalString(),
    accountType: ts_mongoose_1.Type.optionalString(),
    address1: ts_mongoose_1.Type.optionalString(),
    agreedScheduleRates: ts_mongoose_1.Type.optionalBoolean(),
    autoGeneratedReportName: ts_mongoose_1.Type.optionalBoolean(),
    autoGenerateUprn: ts_mongoose_1.Type.optionalBoolean(),
    city: ts_mongoose_1.Type.optionalString(),
    county: ts_mongoose_1.Type.optionalString(),
    createdAt: ts_mongoose_1.Type.optionalString(),
    files: ts_mongoose_1.Type.optionalArray().of(ts_mongoose_1.Type.object().of(shared_models_1.GoogleFileObject)),
    googleFolder: ts_mongoose_1.Type.optionalObject().of(ts_mongoose_1.Type.object().of(shared_models_1.GoogleFolderObject)),
    hasOwnScheduleOfRates: ts_mongoose_1.Type.optionalBoolean(),
    isContractor: ts_mongoose_1.Type.optionalBoolean(),
    name: ts_mongoose_1.Type.optionalString(),
    notes: ts_mongoose_1.Type.optionalString(),
    ownerId: ts_mongoose_1.Type.optionalString(),
    postcode: ts_mongoose_1.Type.optionalString(),
    reportEmail: ts_mongoose_1.Type.optionalObject().of({
        body: ts_mongoose_1.Type.string(),
        subject: ts_mongoose_1.Type.string(),
        subjectUrgent: ts_mongoose_1.Type.string()
    }),
    sageReference: ts_mongoose_1.Type.optionalString(),
    scheduleOfRates: ts_mongoose_1.Type.optionalArray().of(ts_mongoose_1.Type.object().of(shared_models_1.ScheduleOfRatesObject)),
    sector: ts_mongoose_1.Type.optionalString(),
    sites: ts_mongoose_1.Type.optionalArray().of(ts_mongoose_1.Type.object().of(site_models_1.SiteObject)),
    tags: ts_mongoose_1.Type.optionalArray().of(ts_mongoose_1.Type.string()),
    teamsId: ts_mongoose_1.Type.optionalString(),
    telephone: ts_mongoose_1.Type.optionalString()
});
exports.Client = ts_mongoose_1.typedModel('clients', ClientSchema);