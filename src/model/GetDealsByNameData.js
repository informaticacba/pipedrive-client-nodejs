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
 * The GetDealsByNameData model module.
 * @module model/GetDealsByNameData
 * @version 1.0.0
 */
class GetDealsByNameData {
    /**
     * Constructs a new <code>GetDealsByNameData</code>.
     * The array of Deals filtered by name
     * @alias module:model/GetDealsByNameData
     */
    constructor() { 
        
        GetDealsByNameData.initialize(this);
    }

    /**
     * Initializes the fields of this object.
     * This method is used by the constructors of any subclasses, in order to implement multiple inheritance (mix-ins).
     * Only for internal use.
     */
    static initialize(obj) { 
    }

    /**
     * Constructs a <code>GetDealsByNameData</code> from a plain JavaScript object, optionally creating a new instance.
     * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @param {module:model/GetDealsByNameData} obj Optional instance to populate.
     * @return {module:model/GetDealsByNameData} The populated <code>GetDealsByNameData</code> instance.
     */
    static constructFromObject(data, obj) {
        if (data) {
            obj = obj || new GetDealsByNameData();

            if (data.hasOwnProperty('id')) {
                obj['id'] = ApiClient.convertToType(data['id'], 'Number');

                delete data['id'];
            }
            if (data.hasOwnProperty('title')) {
                obj['title'] = ApiClient.convertToType(data['title'], 'String');

                delete data['title'];
            }
            if (data.hasOwnProperty('user_id')) {
                obj['user_id'] = ApiClient.convertToType(data['user_id'], 'Number');

                delete data['user_id'];
            }
            if (data.hasOwnProperty('visible_to')) {
                obj['visible_to'] = ApiClient.convertToType(data['visible_to'], 'String');

                delete data['visible_to'];
            }
            if (data.hasOwnProperty('status')) {
                obj['status'] = ApiClient.convertToType(data['status'], 'String');

                delete data['status'];
            }
            if (data.hasOwnProperty('value')) {
                obj['value'] = ApiClient.convertToType(data['value'], 'Number');

                delete data['value'];
            }
            if (data.hasOwnProperty('currency')) {
                obj['currency'] = ApiClient.convertToType(data['currency'], 'String');

                delete data['currency'];
            }
            if (data.hasOwnProperty('person_name')) {
                obj['person_name'] = ApiClient.convertToType(data['person_name'], 'String');

                delete data['person_name'];
            }
            if (data.hasOwnProperty('person_id')) {
                obj['person_id'] = ApiClient.convertToType(data['person_id'], 'Number');

                delete data['person_id'];
            }
            if (data.hasOwnProperty('organization_name')) {
                obj['organization_name'] = ApiClient.convertToType(data['organization_name'], 'String');

                delete data['organization_name'];
            }
            if (data.hasOwnProperty('organization_id')) {
                obj['organization_id'] = ApiClient.convertToType(data['organization_id'], 'Number');

                delete data['organization_id'];
            }
            if (data.hasOwnProperty('formatted_value')) {
                obj['formatted_value'] = ApiClient.convertToType(data['formatted_value'], 'String');

                delete data['formatted_value'];
            }
            if (data.hasOwnProperty('cc_email')) {
                obj['cc_email'] = ApiClient.convertToType(data['cc_email'], 'String');

                delete data['cc_email'];
            }

            if (Object.keys(data).length > 0) {
                Object.assign(obj, data);
            }

        }
        return obj;
    }


}

/**
 * The ID of the Deal
 * @member {Number} id
 */
GetDealsByNameData.prototype['id'] = undefined;

/**
 * The title of the Deal
 * @member {String} title
 */
GetDealsByNameData.prototype['title'] = undefined;

/**
 * The ID of the User who is associated with the Deal
 * @member {Number} user_id
 */
GetDealsByNameData.prototype['user_id'] = undefined;

/**
 * The visibility of the Deal
 * @member {String} visible_to
 */
GetDealsByNameData.prototype['visible_to'] = undefined;

/**
 * The status of the Deal
 * @member {String} status
 */
GetDealsByNameData.prototype['status'] = undefined;

/**
 * The value of the Deal
 * @member {Number} value
 */
GetDealsByNameData.prototype['value'] = undefined;

/**
 * The currency associated with the Deal
 * @member {String} currency
 */
GetDealsByNameData.prototype['currency'] = undefined;

/**
 * The name of the Person associated with the Deal
 * @member {String} person_name
 */
GetDealsByNameData.prototype['person_name'] = undefined;

/**
 * The ID of the Person associated with the Deal
 * @member {Number} person_id
 */
GetDealsByNameData.prototype['person_id'] = undefined;

/**
 * The name of the Organization associated with the Deal
 * @member {String} organization_name
 */
GetDealsByNameData.prototype['organization_name'] = undefined;

/**
 * The ID of the Person associated with the Deal
 * @member {Number} organization_id
 */
GetDealsByNameData.prototype['organization_id'] = undefined;

/**
 * The Deal value formatted with selected currency. E.g. US$500
 * @member {String} formatted_value
 */
GetDealsByNameData.prototype['formatted_value'] = undefined;

/**
 * The Cc email of the Deal
 * @member {String} cc_email
 */
GetDealsByNameData.prototype['cc_email'] = undefined;






export default GetDealsByNameData;

