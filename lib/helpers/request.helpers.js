"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const types_1 = require("../types");
exports.withMethod = (method) => (req) => (Object.assign({}, req, { method }));
exports.withBody = (body) => (req) => (Object.assign({}, req, { body }));
exports.withHeader = (header) => (req) => (Object.assign({}, req, { headers: [...req.headers, header] }));
exports.withContentLength = (req) => (Object.assign({}, req, { headers: [...req.headers, [types_1.Header.ContentLength, req.body.length]] }));
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoicmVxdWVzdC5oZWxwZXJzLmpzIiwic291cmNlUm9vdCI6IiIsInNvdXJjZXMiOlsiLi4vLi4vc3JjL2hlbHBlcnMvcmVxdWVzdC5oZWxwZXJzLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7O0FBQUEsb0NBQWlFO0FBRXBELFFBQUEsVUFBVSxHQUFHLENBQUMsTUFBYyxFQUFFLEVBQUUsQ0FBQyxDQUM1QyxHQUFhLEVBQ0gsRUFBRSxDQUFDLG1CQUNWLEdBQUcsSUFDTixNQUFNLElBQ04sQ0FBQTtBQUVXLFFBQUEsUUFBUSxHQUFHLENBQUMsSUFBWSxFQUFFLEVBQUUsQ0FBQyxDQUN4QyxHQUFhLEVBQ0gsRUFBRSxDQUFDLG1CQUNWLEdBQUcsSUFDTixJQUFJLElBQ0osQ0FBQTtBQUVXLFFBQUEsVUFBVSxHQUFHLENBQUMsTUFBb0IsRUFBRSxFQUFFLENBQUMsQ0FDbEQsR0FBYSxFQUNILEVBQUUsQ0FBQyxtQkFDVixHQUFHLElBQ04sT0FBTyxFQUFFLENBQUMsR0FBRyxHQUFHLENBQUMsT0FBTyxFQUFFLE1BQU0sQ0FBQyxJQUNqQyxDQUFBO0FBRVcsUUFBQSxpQkFBaUIsR0FBRyxDQUFDLEdBQWEsRUFBWSxFQUFFLENBQUMsbUJBQ3pELEdBQUcsSUFDTixPQUFPLEVBQUUsQ0FBQyxHQUFHLEdBQUcsQ0FBQyxPQUFPLEVBQUUsQ0FBQyxjQUFNLENBQUMsYUFBYSxFQUFFLEdBQUcsQ0FBQyxJQUFJLENBQUMsTUFBTSxDQUFDLENBQUMsSUFDbEUsQ0FBQSJ9