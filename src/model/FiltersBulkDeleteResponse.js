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
import BaseResponse from './BaseResponse';
import FiltersBulkDeleteResponseAllOf from './FiltersBulkDeleteResponseAllOf';
import FiltersBulkDeleteResponseAllOfData from './FiltersBulkDeleteResponseAllOfData';

/**
 * The FiltersBulkDeleteResponse model module.
 * @module model/FiltersBulkDeleteResponse
 * @version 1.0.0
 */
class FiltersBulkDeleteResponse {
    /**
     * Constructs a new <code>FiltersBulkDeleteResponse</code>.
     * @alias module:model/FiltersBulkDeleteResponse
     * @implements module:model/BaseResponse
     * @implements module:model/FiltersBulkDeleteResponseAllOf
     */
    constructor() { 
        BaseResponse.initialize(this);FiltersBulkDeleteResponseAllOf.initialize(this);
        FiltersBulkDeleteResponse.initialize(this);
    }

    /**
     * Initializes the fields of this object.
     * This method is used by the constructors of any subclasses, in order to implement multiple inheritance (mix-ins).
     * Only for internal use.
     */
    static initialize(obj) { 
    }

    /**
     * Constructs a <code>FiltersBulkDeleteResponse</code> from a plain JavaScript object, optionally creating a new instance.
     * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @param {module:model/FiltersBulkDeleteResponse} obj Optional instance to populate.
     * @return {module:model/FiltersBulkDeleteResponse} The populated <code>FiltersBulkDeleteResponse</code> instance.
     */
    static constructFromObject(data, obj) {
        if (data) {
            obj = obj || new FiltersBulkDeleteResponse();
            BaseResponse.constructFromObject(data, obj);
            FiltersBulkDeleteResponseAllOf.constructFromObject(data, obj);

            if (data.hasOwnProperty('success')) {
                obj['success'] = ApiClient.convertToType(data['success'], 'Boolean');

                delete data['success'];
            }
            if (data.hasOwnProperty('data')) {
                obj['data'] = FiltersBulkDeleteResponseAllOfData.constructFromObject(data['data']);

                delete data['data'];
            }

            if (Object.keys(data).length > 0) {
                obj['extra'] = data;
            }

        }
        return obj;
    }


}

/**
 * If the response is successful or not
 * @member {Boolean} success
 */
FiltersBulkDeleteResponse.prototype['success'] = undefined;

/**
 * @member {module:model/FiltersBulkDeleteResponseAllOfData} data
 */
FiltersBulkDeleteResponse.prototype['data'] = undefined;


// Implement BaseResponse interface:
/**
 * If the response is successful or not
 * @member {Boolean} success
 */
BaseResponse.prototype['success'] = undefined;
// Implement FiltersBulkDeleteResponseAllOf interface:
/**
 * @member {module:model/FiltersBulkDeleteResponseAllOfData} data
 */
FiltersBulkDeleteResponseAllOf.prototype['data'] = undefined;




export default FiltersBulkDeleteResponse;
