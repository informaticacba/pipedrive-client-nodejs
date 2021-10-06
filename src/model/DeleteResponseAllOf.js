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
import DeleteResponseAllOfData from './DeleteResponseAllOfData';

/**
 * The DeleteResponseAllOf model module.
 * @module model/DeleteResponseAllOf
 * @version 1.0.0
 */
class DeleteResponseAllOf {
    /**
     * Constructs a new <code>DeleteResponseAllOf</code>.
     * @alias module:model/DeleteResponseAllOf
     */
    constructor() { 
        
        DeleteResponseAllOf.initialize(this);
    }

    /**
     * Initializes the fields of this object.
     * This method is used by the constructors of any subclasses, in order to implement multiple inheritance (mix-ins).
     * Only for internal use.
     */
    static initialize(obj) { 
    }

    /**
     * Constructs a <code>DeleteResponseAllOf</code> from a plain JavaScript object, optionally creating a new instance.
     * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @param {module:model/DeleteResponseAllOf} obj Optional instance to populate.
     * @return {module:model/DeleteResponseAllOf} The populated <code>DeleteResponseAllOf</code> instance.
     */
    static constructFromObject(data, obj) {
        if (data) {
            obj = obj || new DeleteResponseAllOf();

            if (data.hasOwnProperty('data')) {
                obj['data'] = DeleteResponseAllOfData.constructFromObject(data['data']);

                delete data['data'];
            }

            if (Object.keys(data).length > 0) {
                Object.assign(obj, data);
            }

        }
        return obj;
    }


}

/**
 * @member {module:model/DeleteResponseAllOfData} data
 */
DeleteResponseAllOf.prototype['data'] = undefined;






export default DeleteResponseAllOf;

