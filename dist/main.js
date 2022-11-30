"use strict";
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
exports.HTTPResponseError = void 0;
const constants_1 = require("./constants");
/**
 * WorkbaseONE Main client
 */
class WorkbaseONE {
    /**
     * Construct a new instance
     * @param token workbaseONE API token -  go to settings/apps/<your_app>/<your_block>
     */
    constructor({ token }) {
        this.token = token;
    }
    /**
     * Creates authorization header
     * @returns Authorization header value
     */
    createAuthorizationHeader() {
        return `Bearer ${this.token}`;
    }
    /**
     * Send streams to workbaseONE
     * @param options
     * @returns true when request is successfull
     */
    publish(options) {
        return __awaiter(this, void 0, void 0, function* () {
            const headers = {
                'Content-Type': 'application/json',
                Authorization: this.createAuthorizationHeader()
            };
            const method = 'POST';
            const body = JSON.stringify(Object.assign({}, options));
            const response = yield fetch(constants_1.ENDPOINTS.STREAM, { method, body, headers });
            if (!response.ok) {
                throw new HTTPResponseError(response.status, response.statusText, yield response.json());
            }
            return true;
        });
    }
}
exports.default = WorkbaseONE;
class HTTPResponseError extends Error {
    constructor(status, statusText, body) {
        super(`HTTP Error Response: ${status} ${statusText}`);
        this.status = status;
        this.statusText = statusText;
        this.body = body;
    }
    /**
     * Get Error Info as JSON
     */
    toJSON() {
        return {
            status: this.status,
            statusText: this.statusText,
            message: this.body && this.body.message ? this.body.message : undefined,
            body: this.body
        };
    }
}
exports.HTTPResponseError = HTTPResponseError;
