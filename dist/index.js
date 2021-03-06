"use strict";
var __createBinding = (this && this.__createBinding) || (Object.create ? (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    Object.defineProperty(o, k2, { enumerable: true, get: function() { return m[k]; } });
}) : (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    o[k2] = m[k];
}));
var __setModuleDefault = (this && this.__setModuleDefault) || (Object.create ? (function(o, v) {
    Object.defineProperty(o, "default", { enumerable: true, value: v });
}) : function(o, v) {
    o["default"] = v;
});
var __importStar = (this && this.__importStar) || function (mod) {
    if (mod && mod.__esModule) return mod;
    var result = {};
    if (mod != null) for (var k in mod) if (k !== "default" && Object.prototype.hasOwnProperty.call(mod, k)) __createBinding(result, mod, k);
    __setModuleDefault(result, mod);
    return result;
};
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
Object.defineProperty(exports, "__esModule", { value: true });
const core = __importStar(require("@actions/core"));
const check_parameters_1 = require("./check-parameters");
// get input params
let parameters = {};
const vid = core.getInput('vid', { required: true });
parameters['vid'] = vid;
const vkey = core.getInput('vkey', { required: true });
parameters['vkey'] = vkey;
const file = core.getInput('file', { required: true });
parameters['file'] = file;
const run_method = core.getInput('run_method', { required: true });
parameters['run_method'] = run_method;
const request_policy = core.getInput('request_policy', { required: false });
parameters['request_policy'] = request_policy;
const fail_on_severity = core.getInput('fail_on_severity', { required: false });
parameters['fail_on_severity'] = fail_on_severity;
const fail_on_cwe = core.getInput('fail_on_cwe', { required: false });
parameters['fail_on_cwe'] = fail_on_cwe;
const baseline_file = core.getInput('baseline_file', { required: false });
parameters['baseline_file'] = baseline_file;
const policy_name = core.getInput('policy_name', { required: false });
parameters['policy_name'] = policy_name;
const policy_file = core.getInput('policy_file', { required: false });
parameters['policy_file'] = policy_file;
const timeout = core.getInput('timeout', { required: false });
parameters['timeout'] = timeout;
const issue_details = core.getInput('issue_details', { required: false });
parameters['issue_details'] = issue_details;
const summary_display = core.getInput('summary_display', { required: false });
parameters['summary_display'] = summary_display;
const json_display = core.getInput('json_display', { required: false });
parameters['json_display'] = json_display;
const verbose = core.getInput('verbose', { required: false });
parameters['verbose'] = verbose;
const summary_output = core.getInput('summary_output', { required: false });
parameters['summary_output'] = summary_output;
const summary_output_file = core.getInput('summary_output_file', { required: false });
parameters['summary_output_file'] = summary_output_file;
const json_output = core.getInput('json_output', { required: false });
parameters['json_output'] = json_output;
const json_output_file = core.getInput('json_output_file', { required: false });
parameters['json_output_file'] = json_output_file;
const filtered_json_output_file = core.getInput('filtered_json_output_file', { required: false });
parameters['filtered_json_output_file'] = filtered_json_output_file;
const project_name = core.getInput('project_name', { required: false });
parameters['project_name'] = project_name;
const project_url = core.getInput('project_url', { required: false });
parameters['project_url'] = project_url;
const project_ref = core.getInput('project_ref', { required: false });
parameters['fiproject_refle'] = project_ref;
const app_id = core.getInput('app_id', { required: false });
parameters['app_id'] = app_id;
const development_stage = core.getInput('development_stage', { required: false });
parameters['development_stage'] = development_stage;
function run(parameters) {
    return __awaiter(this, void 0, void 0, function* () {
        //downloadJar()
        yield (0, check_parameters_1.checkParameters)(parameters);
        core.info('Scan command to run: ' + scanCommand);
        //runScan(parameters)
    });
}
run(parameters);
