/**
 * PipedriveAPIV1Lib
 *
 * This file was automatically generated by APIMATIC v2.0 ( https://apimatic.io ).
 */

'use strict';

const chai = require('chai');
const assert = chai.assert;
const TestHelper = require("../TestHelper");
const APIHelper = require("../../lib/APIHelper");
const testerlib = require("../../lib");
const testConfiguration = require("../TestBootstrap");

const controller = testerlib.ActivitiesController;
const NumberBooleanEnum = testerlib.NumberBooleanEnum;

describe("ActivitiesController Tests", function tests() {
    this.timeout(testConfiguration.TEST_TIMEOUT);

    /**
     * Returns all activities assigned to a particular user.
     */
    it("should testTestGetAllActivitiesAssignedToAParticularUser response", function testTestGetAllActivitiesAssignedToAParticularUserTest(done) {
        // parameters for the API call
        let input = [];
        input['userId'] = null;
        input['filterId'] = null;
        input['type'] = null;
        input['start'] = 0;
        input['limit'] = null;
        input['startDate'] = null;
        input['endDate'] = null;
        input['done'] = null;

        controller.getAllActivitiesAssignedToAParticularUser(input, function callback(error, response, context) {
            // test response code
            assert.equal(200, context.response.statusCode);
            done();
        }).catch(() => undefined);
    });

});