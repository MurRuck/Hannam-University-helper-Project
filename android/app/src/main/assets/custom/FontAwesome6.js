var _interopRequireDefault=require("@babel/runtime/helpers/interopRequireDefault");Object.defineProperty(exports,"__esModule",{value:true});exports.Button=void 0;Object.defineProperty(exports,"FA6Style",{enumerable:true,get:function get(){return _createIconSetFromFontawesome.FA6Style;}});exports.getImageSourceSync=exports.getImageSource=exports.default=void 0;var _createIconSetFromFontawesome=require("./lib/create-icon-set-from-fontawesome6");var _FontAwesome6Free=_interopRequireDefault(require("./glyphmaps/FontAwesome6Free.json"));var _FontAwesome6Free_meta=_interopRequireDefault(require("./glyphmaps/FontAwesome6Free_meta.json"));var iconSet=(0,_createIconSetFromFontawesome.createFA6iconSet)(_FontAwesome6Free.default,_FontAwesome6Free_meta.default,false);var _default=exports.default=iconSet;var Button=exports.Button=iconSet.Button,getImageSource=exports.getImageSource=iconSet.getImageSource,getImageSourceSync=exports.getImageSourceSync=iconSet.getImageSourceSync;