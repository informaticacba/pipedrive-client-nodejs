/**
 * Pipedrive API v1
 * No description provided (generated by Openapi Generator https://github.com/openapitools/openapi-generator)
 *
 * The version of the OpenAPI document: 1.0.0
 * 
 *
 * NOTE: This class is auto generated by OpenAPI Generator (https://openapi-generator.tech).
 * https://openapi-generator.tech
 * Do not edit the class manually.
 *
 */

import ApiClient from '../ApiClient';

/**
 * The FieldCreateRequestAllOf model module.
 * @module model/FieldCreateRequestAllOf
 * @version 1.0.0
 */
class FieldCreateRequestAllOf {
    /**
     * Constructs a new <code>FieldCreateRequestAllOf</code>.
     * @alias module:model/FieldCreateRequestAllOf
     * @param name {String} Name of the field
     */
    constructor(name) { 
        
        FieldCreateRequestAllOf.initialize(this, name);
    }

    /**
     * Initializes the fields of this object.
     * This method is used by the constructors of any subclasses, in order to implement multiple inheritance (mix-ins).
     * Only for internal use.
     */
    static initialize(obj, name) { 
        obj['name'] = name;
    }

    /**
     * Constructs a <code>FieldCreateRequestAllOf</code> from a plain JavaScript object, optionally creating a new instance.
     * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @param {module:model/FieldCreateRequestAllOf} obj Optional instance to populate.
     * @return {module:model/FieldCreateRequestAllOf} The populated <code>FieldCreateRequestAllOf</code> instance.
     */
    static constructFromObject(data, obj) {
        if (data) {
            obj = obj || new FieldCreateRequestAllOf();

            if (data.hasOwnProperty('name')) {
                obj['name'] = ApiClient.convertToType(data['name'], 'String');

                delete data['name'];
            }
            if (data.hasOwnProperty('options')) {
                obj['options'] = ApiClient.convertToType(data['options'], 'String');

                delete data['options'];
            }
            if (data.hasOwnProperty('add_visible_flag')) {
                obj['add_visible_flag'] = ApiClient.convertToType(data['add_visible_flag'], 'Boolean');

                delete data['add_visible_flag'];
            }

            if (Object.keys(data).length > 0) {
                Object.assign(obj, data);
            }

        }
        return obj;
    }


}

/**
 * Name of the field
 * @member {String} name
 */
FieldCreateRequestAllOf.prototype['name'] = undefined;

/**
 * When `field_type` is either set or enum, possible options must be supplied as a JSON-encoded sequential array of objects. Example: `[{\"label\":\"New Item\"}]`
 * @member {String} options
 */
FieldCreateRequestAllOf.prototype['options'] = undefined;

/**
 * Whether the field is available in 'add new' modal or not (both in web and mobile app)
 * @member {module:model/FieldCreateRequestAllOf.AddVisibleFlagEnum} add_visible_flag
 * @default true
 */
FieldCreateRequestAllOf.prototype['add_visible_flag'] = true;





/**
 * Allowed values for the <code>add_visible_flag</code> property.
 * @enum {Boolean}
 * @readonly
 */
FieldCreateRequestAllOf['AddVisibleFlagEnum'] = {

    /**
     * value: "true"
     * @const
     */
    "true": "true",

    /**
     * value: "false"
     * @const
     */
    "false": "false"
};



export default FieldCreateRequestAllOf;

