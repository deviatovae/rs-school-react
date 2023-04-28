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
var __generator = (this && this.__generator) || function (thisArg, body) {
    var _ = { label: 0, sent: function() { if (t[0] & 1) throw t[1]; return t[1]; }, trys: [], ops: [] }, f, y, t, g;
    return g = { next: verb(0), "throw": verb(1), "return": verb(2) }, typeof Symbol === "function" && (g[Symbol.iterator] = function() { return this; }), g;
    function verb(n) { return function (v) { return step([n, v]); }; }
    function step(op) {
        if (f) throw new TypeError("Generator is already executing.");
        while (g && (g = 0, op[0] && (_ = 0)), _) try {
            if (f = 1, y && (t = op[0] & 2 ? y["return"] : op[0] ? y["throw"] || ((t = y["return"]) && t.call(y), 0) : y.next) && !(t = t.call(y, op[1])).done) return t;
            if (y = 0, t) op = [op[0] & 2, t.value];
            switch (op[0]) {
                case 0: case 1: t = op; break;
                case 4: _.label++; return { value: op[1], done: false };
                case 5: _.label++; y = op[1]; op = [0]; continue;
                case 7: op = _.ops.pop(); _.trys.pop(); continue;
                default:
                    if (!(t = _.trys, t = t.length > 0 && t[t.length - 1]) && (op[0] === 6 || op[0] === 2)) { _ = 0; continue; }
                    if (op[0] === 3 && (!t || (op[1] > t[0] && op[1] < t[3]))) { _.label = op[1]; break; }
                    if (op[0] === 6 && _.label < t[1]) { _.label = t[1]; t = op; break; }
                    if (t && _.label < t[2]) { _.label = t[2]; _.ops.push(op); break; }
                    if (t[2]) _.ops.pop();
                    _.trys.pop(); continue;
            }
            op = body.call(thisArg, _);
        } catch (e) { op = [6, e]; y = 0; } finally { f = t = 0; }
        if (op[0] & 5) throw op[1]; return { value: op[0] ? op[1] : void 0, done: true };
    }
};
exports.__esModule = true;
var express_1 = require("express");
var vite_1 = require("vite");
var fs_1 = require("fs");
var path_1 = require("path");
// const __dirname = path.dirname(fileURLToPath(import.meta.url))
function createServer() {
    return __awaiter(this, void 0, void 0, function () {
        var app, vite;
        var _this = this;
        return __generator(this, function (_a) {
            switch (_a.label) {
                case 0:
                    app = (0, express_1["default"])();
                    return [4 /*yield*/, (0, vite_1.createServer)({
                            server: { middlewareMode: true },
                            appType: 'custom'
                        })
                        // Use vite's connect instance as middleware. If you use your own
                        // express router (express.Router()), you should use router.use
                    ];
                case 1:
                    vite = _a.sent();
                    // Use vite's connect instance as middleware. If you use your own
                    // express router (express.Router()), you should use router.use
                    app.use(vite.middlewares);
                    app.use('*', function (req, res, next) { return __awaiter(_this, void 0, void 0, function () {
                        var url, template, render, appHtml, html, e_1;
                        return __generator(this, function (_a) {
                            switch (_a.label) {
                                case 0:
                                    url = req.originalUrl;
                                    _a.label = 1;
                                case 1:
                                    _a.trys.push([1, 5, , 6]);
                                    template = fs_1["default"].readFileSync(path_1["default"].resolve(__dirname, 'index.html'), 'utf-8');
                                    return [4 /*yield*/, vite.transformIndexHtml(url, template)
                                        // 3. Load the server entry. ssrLoadModule automatically transforms
                                        //    ESM source code to be usable in Node.js! There is no bundling
                                        //    required, and provides efficient invalidation similar to HMR.
                                    ];
                                case 2:
                                    // 2. Apply Vite HTML transforms. This injects the Vite HMR client,
                                    //    and also applies HTML transforms from Vite plugins, e.g. global
                                    //    preambles from @vitejs/plugin-react
                                    template = _a.sent();
                                    return [4 /*yield*/, vite.ssrLoadModule('/src/entry-server.tsx')
                                        // 4. render the app HTML. This assumes entry-server.js's exported
                                        //     `render` function calls appropriate framework SSR APIs,
                                        //    e.g. ReactDOMServer.renderToString()
                                    ];
                                case 3:
                                    render = (_a.sent()).render;
                                    return [4 /*yield*/, render(url)
                                        // 5. Inject the app-rendered HTML into the template.
                                    ];
                                case 4:
                                    appHtml = _a.sent();
                                    html = template.replace("<!--ssr-->", appHtml);
                                    // 6. Send the rendered HTML back.
                                    res.status(200).set({ 'Content-Type': 'text/html' }).end(html);
                                    return [3 /*break*/, 6];
                                case 5:
                                    e_1 = _a.sent();
                                    // If an error is caught, let Vite fix the stack trace so it maps back
                                    // to your actual source code.
                                    vite.ssrFixStacktrace(e_1);
                                    next(e_1);
                                    return [3 /*break*/, 6];
                                case 6: return [2 /*return*/];
                            }
                        });
                    }); });
                    app.listen(5173);
                    return [2 /*return*/];
            }
        });
    });
}
createServer();
