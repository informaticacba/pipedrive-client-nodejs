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
import DeleteStageResponse200Data from './DeleteStageResponse200Data';

/**
 * The DeleteStageResponse200 model module.
 * @module model/DeleteStageResponse200
 * @version 1.0.0
 */
class DeleteStageResponse200 {
    /**
     * Constructs a new <code>DeleteStageResponse200</code>.
     * @alias module:model/DeleteStageResponse200
     */
    constructor() { 
        
        DeleteStageResponse200.initialize(this);
    }

    /**
     * Initializes the fields of this object.
     * This method is used by the constructors of any subclasses, in order to implement multiple inheritance (mix-ins).
     * Only for internal use.
     */
    static initialize(obj) { 
    }

    /**
     * Constructs a <code>DeleteStageResponse200</code> from a plain JavaScript object, optionally creating a new instance.
     * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @param {module:model/DeleteStageResponse200} obj Optional instance to populate.
     * @return {module:model/DeleteStageResponse200} The populated <code>DeleteStageResponse200</code> instance.
     */
    static constructFromObject(data, obj) {
        if (data) {
            obj = obj || new DeleteStageResponse200();

            if (data.hasOwnProperty('success')) {
                obj['success'] = ApiClient.convertToType(data['success'], 'Boolean');

                delete data['success'];
            }
            if (data.hasOwnProperty('data')) {
                obj['data'] = DeleteStageResponse200Data.constructFromObject(data['data']);

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
 * If the request was successful or not
 * @member {Boolean} success
 */
DeleteStageResponse200.prototype['success'] = undefined;

/**
 * @member {module:model/DeleteStageResponse200Data} data
 */
DeleteStageResponse200.prototype['data'] = undefined;






export default DeleteStageResponse200;

