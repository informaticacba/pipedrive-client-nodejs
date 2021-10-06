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
import AdditionalData from './AdditionalData';
import DealStrict from './DealStrict';

/**
 * The GetStageDeals model module.
 * @module model/GetStageDeals
 * @version 1.0.0
 */
class GetStageDeals {
    /**
     * Constructs a new <code>GetStageDeals</code>.
     * @alias module:model/GetStageDeals
     */
    constructor() { 
        
        GetStageDeals.initialize(this);
    }

    /**
     * Initializes the fields of this object.
     * This method is used by the constructors of any subclasses, in order to implement multiple inheritance (mix-ins).
     * Only for internal use.
     */
    static initialize(obj) { 
    }

    /**
     * Constructs a <code>GetStageDeals</code> from a plain JavaScript object, optionally creating a new instance.
     * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @param {module:model/GetStageDeals} obj Optional instance to populate.
     * @return {module:model/GetStageDeals} The populated <code>GetStageDeals</code> instance.
     */
    static constructFromObject(data, obj) {
        if (data) {
            obj = obj || new GetStageDeals();

            if (data.hasOwnProperty('success')) {
                obj['success'] = ApiClient.convertToType(data['success'], 'Boolean');

                delete data['success'];
            }
            if (data.hasOwnProperty('data')) {
                obj['data'] = ApiClient.convertToType(data['data'], [DealStrict]);

                delete data['data'];
            }
            if (data.hasOwnProperty('additional_data')) {
                obj['additional_data'] = AdditionalData.constructFromObject(data['additional_data']);

                delete data['additional_data'];
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
GetStageDeals.prototype['success'] = undefined;

/**
 * The array of Deals
 * @member {Array.<module:model/DealStrict>} data
 */
GetStageDeals.prototype['data'] = undefined;

/**
 * @member {module:model/AdditionalData} additional_data
 */
GetStageDeals.prototype['additional_data'] = undefined;






export default GetStageDeals;

