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
 * The AddFileRequest model module.
 * @module model/AddFileRequest
 * @version 1.0.0
 */
class AddFileRequest {
    /**
     * Constructs a new <code>AddFileRequest</code>.
     * @alias module:model/AddFileRequest
     * @param file {File} A single file, supplied in the multipart/form-data encoding and contained within the given boundaries.
     */
    constructor(file) { 
        
        AddFileRequest.initialize(this, file);
    }

    /**
     * Initializes the fields of this object.
     * This method is used by the constructors of any subclasses, in order to implement multiple inheritance (mix-ins).
     * Only for internal use.
     */
    static initialize(obj, file) { 
        obj['file'] = file;
    }

    /**
     * Constructs a <code>AddFileRequest</code> from a plain JavaScript object, optionally creating a new instance.
     * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @param {module:model/AddFileRequest} obj Optional instance to populate.
     * @return {module:model/AddFileRequest} The populated <code>AddFileRequest</code> instance.
     */
    static constructFromObject(data, obj) {
        if (data) {
            obj = obj || new AddFileRequest();

            if (data.hasOwnProperty('file')) {
                obj['file'] = ApiClient.convertToType(data['file'], File);

                delete data['file'];
            }
            if (data.hasOwnProperty('deal_id')) {
                obj['deal_id'] = ApiClient.convertToType(data['deal_id'], 'Number');

                delete data['deal_id'];
            }
            if (data.hasOwnProperty('person_id')) {
                obj['person_id'] = ApiClient.convertToType(data['person_id'], 'Number');

                delete data['person_id'];
            }
            if (data.hasOwnProperty('org_id')) {
                obj['org_id'] = ApiClient.convertToType(data['org_id'], 'Number');

                delete data['org_id'];
            }
            if (data.hasOwnProperty('product_id')) {
                obj['product_id'] = ApiClient.convertToType(data['product_id'], 'Number');

                delete data['product_id'];
            }
            if (data.hasOwnProperty('activity_id')) {
                obj['activity_id'] = ApiClient.convertToType(data['activity_id'], 'Number');

                delete data['activity_id'];
            }

            if (Object.keys(data).length > 0) {
                obj['extra'] = data;
            }

        }
        return obj;
    }


}

/**
 * A single file, supplied in the multipart/form-data encoding and contained within the given boundaries.
 * @member {File} file
 */
AddFileRequest.prototype['file'] = undefined;

/**
 * ID of the deal to associate file(s) with
 * @member {Number} deal_id
 */
AddFileRequest.prototype['deal_id'] = undefined;

/**
 * ID of the person to associate file(s) with
 * @member {Number} person_id
 */
AddFileRequest.prototype['person_id'] = undefined;

/**
 * ID of the organization to associate file(s) with
 * @member {Number} org_id
 */
AddFileRequest.prototype['org_id'] = undefined;

/**
 * ID of the product to associate file(s) with
 * @member {Number} product_id
 */
AddFileRequest.prototype['product_id'] = undefined;

/**
 * ID of the activity to associate file(s) with
 * @member {Number} activity_id
 */
AddFileRequest.prototype['activity_id'] = undefined;






export default AddFileRequest;
