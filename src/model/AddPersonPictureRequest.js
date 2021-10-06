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
 * The AddPersonPictureRequest model module.
 * @module model/AddPersonPictureRequest
 * @version 1.0.0
 */
class AddPersonPictureRequest {
    /**
     * Constructs a new <code>AddPersonPictureRequest</code>.
     * @alias module:model/AddPersonPictureRequest
     * @param file {File} One image supplied in the multipart/form-data encoding.
     */
    constructor(file) { 
        
        AddPersonPictureRequest.initialize(this, file);
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
     * Constructs a <code>AddPersonPictureRequest</code> from a plain JavaScript object, optionally creating a new instance.
     * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @param {module:model/AddPersonPictureRequest} obj Optional instance to populate.
     * @return {module:model/AddPersonPictureRequest} The populated <code>AddPersonPictureRequest</code> instance.
     */
    static constructFromObject(data, obj) {
        if (data) {
            obj = obj || new AddPersonPictureRequest();

            if (data.hasOwnProperty('file')) {
                obj['file'] = ApiClient.convertToType(data['file'], File);

                delete data['file'];
            }
            if (data.hasOwnProperty('crop_x')) {
                obj['crop_x'] = ApiClient.convertToType(data['crop_x'], 'Number');

                delete data['crop_x'];
            }
            if (data.hasOwnProperty('crop_y')) {
                obj['crop_y'] = ApiClient.convertToType(data['crop_y'], 'Number');

                delete data['crop_y'];
            }
            if (data.hasOwnProperty('crop_width')) {
                obj['crop_width'] = ApiClient.convertToType(data['crop_width'], 'Number');

                delete data['crop_width'];
            }
            if (data.hasOwnProperty('crop_height')) {
                obj['crop_height'] = ApiClient.convertToType(data['crop_height'], 'Number');

                delete data['crop_height'];
            }

            if (Object.keys(data).length > 0) {
                obj['extra'] = data;
            }

        }
        return obj;
    }


}

/**
 * One image supplied in the multipart/form-data encoding.
 * @member {File} file
 */
AddPersonPictureRequest.prototype['file'] = undefined;

/**
 * X coordinate to where start cropping form (in pixels)
 * @member {Number} crop_x
 */
AddPersonPictureRequest.prototype['crop_x'] = undefined;

/**
 * Y coordinate to where start cropping form (in pixels)
 * @member {Number} crop_y
 */
AddPersonPictureRequest.prototype['crop_y'] = undefined;

/**
 * Width of cropping area (in pixels)
 * @member {Number} crop_width
 */
AddPersonPictureRequest.prototype['crop_width'] = undefined;

/**
 * Height of cropping area (in pixels)
 * @member {Number} crop_height
 */
AddPersonPictureRequest.prototype['crop_height'] = undefined;






export default AddPersonPictureRequest;

