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
import BasePipeline from './BasePipeline';

/**
 * The AddNewPipelineAllOf model module.
 * @module model/AddNewPipelineAllOf
 * @version 1.0.0
 */
class AddNewPipelineAllOf {
    /**
     * Constructs a new <code>AddNewPipelineAllOf</code>.
     * @alias module:model/AddNewPipelineAllOf
     */
    constructor() { 
        
        AddNewPipelineAllOf.initialize(this);
    }

    /**
     * Initializes the fields of this object.
     * This method is used by the constructors of any subclasses, in order to implement multiple inheritance (mix-ins).
     * Only for internal use.
     */
    static initialize(obj) { 
    }

    /**
     * Constructs a <code>AddNewPipelineAllOf</code> from a plain JavaScript object, optionally creating a new instance.
     * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @param {module:model/AddNewPipelineAllOf} obj Optional instance to populate.
     * @return {module:model/AddNewPipelineAllOf} The populated <code>AddNewPipelineAllOf</code> instance.
     */
    static constructFromObject(data, obj) {
        if (data) {
            obj = obj || new AddNewPipelineAllOf();

            if (data.hasOwnProperty('data')) {
                obj['data'] = BasePipeline.constructFromObject(data['data']);

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
 * @member {module:model/BasePipeline} data
 */
AddNewPipelineAllOf.prototype['data'] = undefined;






export default AddNewPipelineAllOf;

