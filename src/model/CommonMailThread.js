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
import NumberBooleanDefault0 from './NumberBooleanDefault0';

/**
 * The CommonMailThread model module.
 * @module model/CommonMailThread
 * @version 1.0.0
 */
class CommonMailThread {
    /**
     * Constructs a new <code>CommonMailThread</code>.
     * @alias module:model/CommonMailThread
     */
    constructor() { 
        
        CommonMailThread.initialize(this);
    }

    /**
     * Initializes the fields of this object.
     * This method is used by the constructors of any subclasses, in order to implement multiple inheritance (mix-ins).
     * Only for internal use.
     */
    static initialize(obj) { 
    }

    /**
     * Constructs a <code>CommonMailThread</code> from a plain JavaScript object, optionally creating a new instance.
     * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @param {module:model/CommonMailThread} obj Optional instance to populate.
     * @return {module:model/CommonMailThread} The populated <code>CommonMailThread</code> instance.
     */
    static constructFromObject(data, obj) {
        if (data) {
            obj = obj || new CommonMailThread();

            if (data.hasOwnProperty('id')) {
                obj['id'] = ApiClient.convertToType(data['id'], 'Number');

                delete data['id'];
            }
            if (data.hasOwnProperty('account_id')) {
                obj['account_id'] = ApiClient.convertToType(data['account_id'], 'String');

                delete data['account_id'];
            }
            if (data.hasOwnProperty('user_id')) {
                obj['user_id'] = ApiClient.convertToType(data['user_id'], 'Number');

                delete data['user_id'];
            }
            if (data.hasOwnProperty('subject')) {
                obj['subject'] = ApiClient.convertToType(data['subject'], 'String');

                delete data['subject'];
            }
            if (data.hasOwnProperty('snippet')) {
                obj['snippet'] = ApiClient.convertToType(data['snippet'], 'String');

                delete data['snippet'];
            }
            if (data.hasOwnProperty('read_flag')) {
                obj['read_flag'] = ApiClient.convertToType(data['read_flag'], NumberBooleanDefault0);

                delete data['read_flag'];
            }
            if (data.hasOwnProperty('mail_tracking_status')) {
                obj['mail_tracking_status'] = ApiClient.convertToType(data['mail_tracking_status'], 'String');

                delete data['mail_tracking_status'];
            }
            if (data.hasOwnProperty('has_attachments_flag')) {
                obj['has_attachments_flag'] = ApiClient.convertToType(data['has_attachments_flag'], NumberBooleanDefault0);

                delete data['has_attachments_flag'];
            }
            if (data.hasOwnProperty('has_inline_attachments_flag')) {
                obj['has_inline_attachments_flag'] = ApiClient.convertToType(data['has_inline_attachments_flag'], NumberBooleanDefault0);

                delete data['has_inline_attachments_flag'];
            }
            if (data.hasOwnProperty('has_real_attachments_flag')) {
                obj['has_real_attachments_flag'] = ApiClient.convertToType(data['has_real_attachments_flag'], NumberBooleanDefault0);

                delete data['has_real_attachments_flag'];
            }
            if (data.hasOwnProperty('deleted_flag')) {
                obj['deleted_flag'] = ApiClient.convertToType(data['deleted_flag'], NumberBooleanDefault0);

                delete data['deleted_flag'];
            }
            if (data.hasOwnProperty('synced_flag')) {
                obj['synced_flag'] = ApiClient.convertToType(data['synced_flag'], NumberBooleanDefault0);

                delete data['synced_flag'];
            }
            if (data.hasOwnProperty('smart_bcc_flag')) {
                obj['smart_bcc_flag'] = ApiClient.convertToType(data['smart_bcc_flag'], NumberBooleanDefault0);

                delete data['smart_bcc_flag'];
            }
            if (data.hasOwnProperty('mail_link_tracking_enabled_flag')) {
                obj['mail_link_tracking_enabled_flag'] = ApiClient.convertToType(data['mail_link_tracking_enabled_flag'], NumberBooleanDefault0);

                delete data['mail_link_tracking_enabled_flag'];
            }
            if (data.hasOwnProperty('write_flag')) {
                obj['write_flag'] = ApiClient.convertToType(data['write_flag'], 'Boolean');

                delete data['write_flag'];
            }

            if (Object.keys(data).length > 0) {
                Object.assign(obj, data);
            }

        }
        return obj;
    }


}

/**
 * ID of the mail thread
 * @member {Number} id
 */
CommonMailThread.prototype['id'] = undefined;

/**
 * The connection account ID
 * @member {String} account_id
 */
CommonMailThread.prototype['account_id'] = undefined;

/**
 * ID of the user whom mail message will be assigned to
 * @member {Number} user_id
 */
CommonMailThread.prototype['user_id'] = undefined;

/**
 * The subject
 * @member {String} subject
 */
CommonMailThread.prototype['subject'] = undefined;

/**
 * A snippet
 * @member {String} snippet
 */
CommonMailThread.prototype['snippet'] = undefined;

/**
 * Whether the mail thread is read
 * @member {module:model/NumberBooleanDefault0} read_flag
 */
CommonMailThread.prototype['read_flag'] = undefined;

/**
 * Mail tracking status
 * @member {String} mail_tracking_status
 */
CommonMailThread.prototype['mail_tracking_status'] = undefined;

/**
 * Whether the mail thread has an attachment
 * @member {module:model/NumberBooleanDefault0} has_attachments_flag
 */
CommonMailThread.prototype['has_attachments_flag'] = undefined;

/**
 * Whether the mail thread has inline attachments
 * @member {module:model/NumberBooleanDefault0} has_inline_attachments_flag
 */
CommonMailThread.prototype['has_inline_attachments_flag'] = undefined;

/**
 * Whether the mail thread has real attachments (which are not inline)
 * @member {module:model/NumberBooleanDefault0} has_real_attachments_flag
 */
CommonMailThread.prototype['has_real_attachments_flag'] = undefined;

/**
 * Whether the mail thread is deleted
 * @member {module:model/NumberBooleanDefault0} deleted_flag
 */
CommonMailThread.prototype['deleted_flag'] = undefined;

/**
 * Whether the mail thread is synced
 * @member {module:model/NumberBooleanDefault0} synced_flag
 */
CommonMailThread.prototype['synced_flag'] = undefined;

/**
 * Whether one of the parties of the mail thread is Bcc
 * @member {module:model/NumberBooleanDefault0} smart_bcc_flag
 */
CommonMailThread.prototype['smart_bcc_flag'] = undefined;

/**
 * Whether the link tracking of the mail thread is enabled
 * @member {module:model/NumberBooleanDefault0} mail_link_tracking_enabled_flag
 */
CommonMailThread.prototype['mail_link_tracking_enabled_flag'] = undefined;

/**
 * We strongly advise you to avoid the use of this property. We will soon deprecate this property
 * @member {Boolean} write_flag
 */
CommonMailThread.prototype['write_flag'] = undefined;






export default CommonMailThread;

