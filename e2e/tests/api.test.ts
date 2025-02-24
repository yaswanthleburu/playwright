import { test, expect } from '@playwright/test';
import { TestData } from '../../resources/testData.json';
import { CommonAPI } from '../pages/api.page';


test('GET API request', async ({ request }) => {

    let id, page

    await test.step('Launching browser and getting response', async () => {
        console.log('==> Step-1 - Launching browser and logging into application');
        const response = await CommonAPI.getRequest(request, TestData.APIBASEURL, false, false);
        expect(response.status()).toBe(200);
        console.log("response", response);
    });

    await test.step('Getting list of user', async () => {
        console.log('==> Step-2 - Getting list of user');
        const response = await CommonAPI.getRequest(request, TestData.APIBASEURL, true, false, TestData.LISTOFUSERS);
        expect(response.status()).toBe(200);
        const responseData = await response.json();
        console.log("responseData", responseData);
        page = responseData.page;
        console.log("page", page);
        const data = responseData.data.find(key => key.id == TestData.ID);
        const dataValue = data.email;
        console.log("dataValue", dataValue);
        expect(dataValue).toContain(TestData.EMAIL);
    });

    await test.step('Restring the user', async () => {
        console.log('==> Step-3 - Restring the user');
        const response = await CommonAPI.postRequest(request, TestData.APIBASEURL, TestData.REGISTER, '', TestData.REGISTERDATA, true, false);
        expect(response.status()).toBe(200);
        console.log(await response.json());
    });

    await test.step('Create the user', async () => {
        console.log('==> Step-4 - Create the user');
        const response = await CommonAPI.postRequest(request, TestData.APIBASEURL, TestData.CREATUSER, '', TestData.USERDATA, true, false);
        expect(response.status()).toBe(201);
        console.log(await response.json());
        const responseData = await response.json();
        const data = responseData.name;
        id = responseData.id;
        console.log("id", id);
        console.log('data', data);
        expect(data).toContain(TestData.USERDATA.name);
    });

    await test.step('login the user', async () => {
        console.log('==> Step-5 - login the user');
        const response = await CommonAPI.postRequest(request, TestData.APIBASEURL, TestData.LOGIN, '', TestData.REGISTERDATA, true, false);
        expect(response.status()).toBe(200);
        console.log(await response.json());
    });

    await test.step('Details of particular user', async () => {
        console.log('==> Step-6 -Details of particular user');
        const response = await CommonAPI.getRequest(request, TestData.APIBASEURL, true, false, TestData.DETAILSOFPARTICULARUSER);
        expect(response.status()).toBe(200);
        console.log(await response.json());
        const responseData = await response.json();
        const data = responseData.data.email;
        console.log('data', data);
        expect(data).toContain(TestData.USEREMAIL);
    });

    await test.step('Delay user', async () => {
        console.log('==> Step-7 - Delay user');
        const response = await CommonAPI.getRequest(request, TestData.APIBASEURL, true, false, TestData.DELAY);
        expect(response.status()).toBe(200);
        console.log(await response.json());
    });

    await test.step('Next Page', async () => {
        console.log('==> Step-8 - next page');
        const response = await CommonAPI.getRequest(request, TestData.APIBASEURL, false, true, TestData.NEXTPAGE, TestData.PAGE);
        console.log(await response.json());
        const responseData = await response.json();
        const nextPage = responseData.page;
        console.log('nextPage', nextPage);
        expect(response.status()).toBe(200);
        expect(nextPage).toBeGreaterThan(page);
    });

    await test.step('Delete user', async () => {
        console.log('==> Step-9 - delete user');
        const response = await CommonAPI.deleteRequest(request, TestData.APIBASEURL, TestData.DELETE, id);
        console.log('deleted User ID', id);
        expect(response.status()).toBe(204);
    });
});