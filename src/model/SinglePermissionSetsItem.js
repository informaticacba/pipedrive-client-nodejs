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
import PermissionSetsItem from './PermissionSetsItem';
import SinglePermissionSetsItemAllOf from './SinglePermissionSetsItemAllOf';

/**
 * The SinglePermissionSetsItem model module.
 * @module model/SinglePermissionSetsItem
 * @version 1.0.0
 */
class SinglePermissionSetsItem {
    /**
     * Constructs a new <code>SinglePermissionSetsItem</code>.
     * @alias module:model/SinglePermissionSetsItem
     * @implements module:model/PermissionSetsItem
     * @implements module:model/SinglePermissionSetsItemAllOf
     */
    constructor() { 
        PermissionSetsItem.initialize(this);SinglePermissionSetsItemAllOf.initialize(this);
        SinglePermissionSetsItem.initialize(this);
    }

    /**
     * Initializes the fields of this object.
     * This method is used by the constructors of any subclasses, in order to implement multiple inheritance (mix-ins).
     * Only for internal use.
     */
    static initialize(obj) { 
    }

    /**
     * Constructs a <code>SinglePermissionSetsItem</code> from a plain JavaScript object, optionally creating a new instance.
     * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @param {module:model/SinglePermissionSetsItem} obj Optional instance to populate.
     * @return {module:model/SinglePermissionSetsItem} The populated <code>SinglePermissionSetsItem</code> instance.
     */
    static constructFromObject(data, obj) {
        if (data) {
            obj = obj || new SinglePermissionSetsItem();
            PermissionSetsItem.constructFromObject(data, obj);
            SinglePermissionSetsItemAllOf.constructFromObject(data, obj);

            if (data.hasOwnProperty('id')) {
                obj['id'] = ApiClient.convertToType(data['id'], 'Number');

                delete data['id'];
            }
            if (data.hasOwnProperty('name')) {
                obj['name'] = ApiClient.convertToType(data['name'], 'String');

                delete data['name'];
            }
            if (data.hasOwnProperty('assignment_count')) {
                obj['assignment_count'] = ApiClient.convertToType(data['assignment_count'], 'Number');

                delete data['assignment_count'];
            }
            if (data.hasOwnProperty('contents')) {
                obj['contents'] = ApiClient.convertToType(data['contents'], ['String']);

                delete data['contents'];
            }

            if (Object.keys(data).length > 0) {
                Object.assign(obj, data);
            }

        }
        return obj;
    }


}

/**
 * The ID of User Permission Set
 * @member {Number} id
 */
SinglePermissionSetsItem.prototype['id'] = undefined;

/**
 * The name of Permission Set
 * @member {String} name
 */
SinglePermissionSetsItem.prototype['name'] = undefined;

/**
 * The number of Users assigned to this Permission Set
 * @member {Number} assignment_count
 */
SinglePermissionSetsItem.prototype['assignment_count'] = undefined;

/**
 * A permission assigned to this Permission Set
 * @member {Array.<String>} contents
 */
SinglePermissionSetsItem.prototype['contents'] = undefined;


// Implement PermissionSetsItem interface:
/**
 * The ID of User Permission Set
 * @member {Number} id
 */
PermissionSetsItem.prototype['id'] = undefined;
/**
 * The name of Permission Set
 * @member {String} name
 */
PermissionSetsItem.prototype['name'] = undefined;
/**
 * The number of Users assigned to this Permission Set
 * @member {Number} assignment_count
 */
PermissionSetsItem.prototype['assignment_count'] = undefined;
// Implement SinglePermissionSetsItemAllOf interface:
/**
 * A permission assigned to this Permission Set
 * @member {Array.<String>} contents
 */
SinglePermissionSetsItemAllOf.prototype['contents'] = undefined;




export default SinglePermissionSetsItem;

