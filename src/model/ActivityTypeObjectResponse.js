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
import IconKey from './IconKey';

/**
 * The ActivityTypeObjectResponse model module.
 * @module model/ActivityTypeObjectResponse
 * @version 1.0.0
 */
class ActivityTypeObjectResponse {
    /**
     * Constructs a new <code>ActivityTypeObjectResponse</code>.
     * @alias module:model/ActivityTypeObjectResponse
     */
    constructor() { 
        
        ActivityTypeObjectResponse.initialize(this);
    }

    /**
     * Initializes the fields of this object.
     * This method is used by the constructors of any subclasses, in order to implement multiple inheritance (mix-ins).
     * Only for internal use.
     */
    static initialize(obj) { 
    }

    /**
     * Constructs a <code>ActivityTypeObjectResponse</code> from a plain JavaScript object, optionally creating a new instance.
     * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @param {module:model/ActivityTypeObjectResponse} obj Optional instance to populate.
     * @return {module:model/ActivityTypeObjectResponse} The populated <code>ActivityTypeObjectResponse</code> instance.
     */
    static constructFromObject(data, obj) {
        if (data) {
            obj = obj || new ActivityTypeObjectResponse();

            if (data.hasOwnProperty('id')) {
                obj['id'] = ApiClient.convertToType(data['id'], 'Number');

                delete data['id'];
            }
            if (data.hasOwnProperty('name')) {
                obj['name'] = ApiClient.convertToType(data['name'], 'String');

                delete data['name'];
            }
            if (data.hasOwnProperty('icon_key')) {
                obj['icon_key'] = IconKey.constructFromObject(data['icon_key']);

                delete data['icon_key'];
            }
            if (data.hasOwnProperty('color')) {
                obj['color'] = ApiClient.convertToType(data['color'], 'String');

                delete data['color'];
            }
            if (data.hasOwnProperty('order_nr')) {
                obj['order_nr'] = ApiClient.convertToType(data['order_nr'], 'Number');

                delete data['order_nr'];
            }
            if (data.hasOwnProperty('key_string')) {
                obj['key_string'] = ApiClient.convertToType(data['key_string'], 'String');

                delete data['key_string'];
            }
            if (data.hasOwnProperty('active_flag')) {
                obj['active_flag'] = ApiClient.convertToType(data['active_flag'], 'Boolean');

                delete data['active_flag'];
            }
            if (data.hasOwnProperty('is_custom_flag')) {
                obj['is_custom_flag'] = ApiClient.convertToType(data['is_custom_flag'], 'Boolean');

                delete data['is_custom_flag'];
            }
            if (data.hasOwnProperty('add_time')) {
                obj['add_time'] = ApiClient.convertToType(data['add_time'], 'String');

                delete data['add_time'];
            }
            if (data.hasOwnProperty('update_time')) {
                obj['update_time'] = ApiClient.convertToType(data['update_time'], 'String');

                delete data['update_time'];
            }

            if (Object.keys(data).length > 0) {
                Object.assign(obj, data);
            }

        }
        return obj;
    }


}

/**
 * The ID of the ActivityType
 * @member {Number} id
 */
ActivityTypeObjectResponse.prototype['id'] = undefined;

/**
 * The name of the ActivityType
 * @member {String} name
 */
ActivityTypeObjectResponse.prototype['name'] = undefined;

/**
 * @member {module:model/IconKey} icon_key
 */
ActivityTypeObjectResponse.prototype['icon_key'] = undefined;

/**
 * A designated color for the ActivityType in 6-character HEX format (e.g. `FFFFFF` for white, `000000` for black)
 * @member {String} color
 */
ActivityTypeObjectResponse.prototype['color'] = undefined;

/**
 * An order number for this ActivityType. Order numbers should be used to order the types in the ActivityType selections.
 * @member {Number} order_nr
 */
ActivityTypeObjectResponse.prototype['order_nr'] = undefined;

/**
 * A string that is generated by the API based on the given name of the ActivityType upon creation
 * @member {String} key_string
 */
ActivityTypeObjectResponse.prototype['key_string'] = undefined;

/**
 * The active flag of the ActivityType
 * @member {Boolean} active_flag
 */
ActivityTypeObjectResponse.prototype['active_flag'] = undefined;

/**
 * Whether the ActivityType is a custom one or not
 * @member {Boolean} is_custom_flag
 */
ActivityTypeObjectResponse.prototype['is_custom_flag'] = undefined;

/**
 * The creation time of the ActivityType
 * @member {String} add_time
 */
ActivityTypeObjectResponse.prototype['add_time'] = undefined;

/**
 * The update time of the ActivityType
 * @member {String} update_time
 */
ActivityTypeObjectResponse.prototype['update_time'] = undefined;






export default ActivityTypeObjectResponse;

