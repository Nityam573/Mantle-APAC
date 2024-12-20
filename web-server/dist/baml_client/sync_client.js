"use strict";
/*************************************************************************************************

Welcome to Baml! To use this generated code, please run one of the following:

$ npm install @boundaryml/baml
$ yarn add @boundaryml/baml
$ pnpm add @boundaryml/baml

*************************************************************************************************/
Object.defineProperty(exports, "__esModule", { value: true });
exports.b = exports.BamlSyncClient = void 0;
// This file was generated by BAML: do not edit it. Instead, edit the BAML
// files and re-generate this code.
//
/* eslint-disable */
// tslint:disable
// @ts-nocheck
// biome-ignore format: autogenerated code
const baml_1 = require("@boundaryml/baml");
const globals_1 = require("./globals");
class BamlSyncClient {
    constructor(runtime, ctx_manager) {
        this.runtime = runtime;
        this.ctx_manager = ctx_manager;
    }
    /*
    * @deprecated NOT IMPLEMENTED as streaming must by async. We
    * are not providing an async version as we want to reserve the
    * right to provide a sync version in the future.
    */
    get stream() {
        throw new Error("stream is not available in BamlSyncClient. Use `import { b } from 'baml_client/async_client");
    }
    ExtractStakeComment(user_comment, __baml_options__) {
        var _a;
        try {
            const raw = this.runtime.callFunctionSync("ExtractStakeComment", {
                "user_comment": user_comment
            }, this.ctx_manager.cloneContext(), (_a = __baml_options__ === null || __baml_options__ === void 0 ? void 0 : __baml_options__.tb) === null || _a === void 0 ? void 0 : _a.__tb(), __baml_options__ === null || __baml_options__ === void 0 ? void 0 : __baml_options__.clientRegistry);
            return raw.parsed();
        }
        catch (error) {
            const bamlError = (0, baml_1.createBamlValidationError)(error);
            if (bamlError instanceof baml_1.BamlValidationError) {
                throw bamlError;
            }
            else {
                throw error;
            }
        }
    }
}
exports.BamlSyncClient = BamlSyncClient;
exports.b = new BamlSyncClient(globals_1.DO_NOT_USE_DIRECTLY_UNLESS_YOU_KNOW_WHAT_YOURE_DOING_RUNTIME, globals_1.DO_NOT_USE_DIRECTLY_UNLESS_YOU_KNOW_WHAT_YOURE_DOING_CTX);
//# sourceMappingURL=sync_client.js.map