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
 * The InlineResponse20024AdditionalData model module.
 * @module model/InlineResponse20024AdditionalData
 * @version 1.0.0
 */
class InlineResponse20024AdditionalData {
    /**
     * Constructs a new <code>InlineResponse20024AdditionalData</code>.
     * @alias module:model/InlineResponse20024AdditionalData
     */
    constructor() { 
        
        InlineResponse20024AdditionalData.initialize(this);
    }

    /**
     * Initializes the fields of this object.
     * This method is used by the constructors of any subclasses, in order to implement multiple inheritance (mix-ins).
     * Only for internal use.
     */
    static initialize(obj) { 
    }

    /**
     * Constructs a <code>InlineResponse20024AdditionalData</code> from a plain JavaScript object, optionally creating a new instance.
     * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @param {module:model/InlineResponse20024AdditionalData} obj Optional instance to populate.
     * @return {module:model/InlineResponse20024AdditionalData} The populated <code>InlineResponse20024AdditionalData</code> instance.
     */
    static constructFromObject(data, obj) {
        if (data) {
            obj = obj || new InlineResponse20024AdditionalData();

            if (data.hasOwnProperty('pagination')) {
                obj['pagination'] = ApiClient.convertToType(data['pagination'], Object);
            }
        }
        return obj;
    }


}

/**
 * Pagination details of the list
 * @member {Object} pagination
 */
InlineResponse20024AdditionalData.prototype['pagination'] = undefined;






export default InlineResponse20024AdditionalData;
