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
 * The InlineResponse200RelatedObjectsPerson model module.
 * @module model/InlineResponse200RelatedObjectsPerson
 * @version 1.0.0
 */
class InlineResponse200RelatedObjectsPerson {
    /**
     * Constructs a new <code>InlineResponse200RelatedObjectsPerson</code>.
     * @alias module:model/InlineResponse200RelatedObjectsPerson
     */
    constructor() { 
        
        InlineResponse200RelatedObjectsPerson.initialize(this);
    }

    /**
     * Initializes the fields of this object.
     * This method is used by the constructors of any subclasses, in order to implement multiple inheritance (mix-ins).
     * Only for internal use.
     */
    static initialize(obj) { 
    }

    /**
     * Constructs a <code>InlineResponse200RelatedObjectsPerson</code> from a plain JavaScript object, optionally creating a new instance.
     * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @param {module:model/InlineResponse200RelatedObjectsPerson} obj Optional instance to populate.
     * @return {module:model/InlineResponse200RelatedObjectsPerson} The populated <code>InlineResponse200RelatedObjectsPerson</code> instance.
     */
    static constructFromObject(data, obj) {
        if (data) {
            obj = obj || new InlineResponse200RelatedObjectsPerson();

            if (data.hasOwnProperty('PERSON_ID')) {
                obj['PERSON_ID'] = ApiClient.convertToType(data['PERSON_ID'], Object);
            }
        }
        return obj;
    }


}

/**
 * The ID of the Person associated with the item
 * @member {Object} PERSON_ID
 */
InlineResponse200RelatedObjectsPerson.prototype['PERSON_ID'] = undefined;






export default InlineResponse200RelatedObjectsPerson;
