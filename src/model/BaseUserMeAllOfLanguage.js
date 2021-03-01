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
 * The BaseUserMeAllOfLanguage model module.
 * @module model/BaseUserMeAllOfLanguage
 * @version 1.0.0
 */
class BaseUserMeAllOfLanguage {
    /**
     * Constructs a new <code>BaseUserMeAllOfLanguage</code>.
     * The User language details
     * @alias module:model/BaseUserMeAllOfLanguage
     */
    constructor() { 
        
        BaseUserMeAllOfLanguage.initialize(this);
    }

    /**
     * Initializes the fields of this object.
     * This method is used by the constructors of any subclasses, in order to implement multiple inheritance (mix-ins).
     * Only for internal use.
     */
    static initialize(obj) { 
    }

    /**
     * Constructs a <code>BaseUserMeAllOfLanguage</code> from a plain JavaScript object, optionally creating a new instance.
     * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @param {module:model/BaseUserMeAllOfLanguage} obj Optional instance to populate.
     * @return {module:model/BaseUserMeAllOfLanguage} The populated <code>BaseUserMeAllOfLanguage</code> instance.
     */
    static constructFromObject(data, obj) {
        if (data) {
            obj = obj || new BaseUserMeAllOfLanguage();

            if (data.hasOwnProperty('language_code')) {
                obj['language_code'] = ApiClient.convertToType(data['language_code'], 'String');

                delete data['language_code'];
            }
            if (data.hasOwnProperty('country_code')) {
                obj['country_code'] = ApiClient.convertToType(data['country_code'], 'String');

                delete data['country_code'];
            }

            if (Object.keys(data).length > 0) {
                obj['extra'] = data;
            }

        }
        return obj;
    }


}

/**
 * The language code. E.g. en
 * @member {String} language_code
 */
BaseUserMeAllOfLanguage.prototype['language_code'] = undefined;

/**
 * The country code. E.g. US
 * @member {String} country_code
 */
BaseUserMeAllOfLanguage.prototype['country_code'] = undefined;






export default BaseUserMeAllOfLanguage;
