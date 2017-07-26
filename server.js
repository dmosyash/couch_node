const NodeCouchDb = require('node-couchdb');
 
// node-couchdb instance talking to external service 
const couchLG = new NodeCouchDb({
    host: 'couch.laughguru.com',
    protocol: 'http',
    port: 5984,
    auth: {
        user: 'admin@laughguru.com',
        pass: 'AdminLG123'
    }
});

const couchLocal = new NodeCouchDb({
    host: 'localhost',
    protocol: 'http',
    port: 5984,
    auth: {
        user: 'admin',
        pass: 'ADMIN'
    }
});

var preferences = {
    "_id": "preferences",
    "slide_interval": 5000,
    "slide_interval_with_audio": 5000,
    "qna_interval": 30000,
    "comprehension_timer": 300000,
    "is_mute_teaching": "false",
    "is_mute_practice": "false",
    "show_tips": true,
    "sound": true,
    "mute_questions": false,
    "mute_explanations": false,
    "auto_forward_next_ques": 0,
    "auto_fullscreen_on_phone": true,
    "auto_fullscreen_otherwise": false,
    "analytics_email_subscription": true,
    "games": ["Football", "Cricket", "Jokes", "Grid"]
}

var freeUserDBName = ['lgdc6fea47-479b-41d3-be0a-33aa10452243',
    'lgbdd9f0dd-dedb-48b0-a9a3-1cd353ddb177',
    'lgd65b97be-d993-42bb-961a-a240d7ec88b5',
    'lg38cdbb8e-3e99-4cb5-8938-281d6d04e4e5',
    'lge69e7982-8ac4-4d60-ba93-52c9103bd5bf',
    'lg19a805c5-5a29-45c7-bd4d-68e01ebd04df',
    'lg93ab1a19-a135-4948-9ac9-a8518d59a28e',
    'lg29c66f6c-d36d-4002-883d-482978798a97',
    'lgda0f5437-5722-4476-8db7-abb2f0b50ee7',
    'lg3c43d20c-0a1e-4fc3-a399-db1c97cba18b',
    'lgf9b8fb25-0dfd-4e8a-b055-306b20561c84',
    'lgf70ced99-dca0-41cb-9d28-6abc6c1a0dd9',
    'lg8fd023df-b1d7-4756-866b-ae8ad51b6413',
    'lg9acc4f0f-1198-4a46-9823-af8cf3a15c8b',
    'lg463e40ea-dbcc-42f2-8d6a-56348f849611',
    'lg57f7090b-1c37-4a20-b062-49fc09a2ba18',
    'lga1fdf401-054f-4e6a-b539-e66a4b92aa1e',
    'lg47cfc47a-497f-493f-9ba8-ce251a5495f1',
    'lg3602e4eb-148a-422e-af64-dd4132bbc3ce',
    'lg40eb4d82-a9b4-4ba9-95c3-aee9898221e9',
    'lg0fdd23c7-5833-4967-beed-33c682ee6242',
    'lg61ae27fa-7f0a-4401-8e39-950aec80c029',
    'lgd24dec27-295d-4bf6-a2b9-ff1784ad3824',
    'lge6e550f1-5b9d-40be-8aec-7da874cb422f',
    'lg6e2999f1-e2ee-483c-847c-92b113cc739c',
    'lga2452b5d-2a34-413b-9fd6-9c0e732767b1',
    'lgacf8a8ea-4d94-4aa2-8dbe-f8a23fb400be',
    'lg95901e52-ba52-42fa-99a4-50e0fabaeae6',
    'lge2542fc1-77a1-4678-a46c-2d09128aea2f',
    'lgb4e960df-36f2-48d4-8a38-fbd8851dfb04',
    'lg7ed59c0d-fb11-45a1-81f0-f1378ea420e6',
    'lga63f5cc3-d7b1-41dc-91f4-655f1318dc22',
    'lg1a2dcf48-c4e1-4944-95ef-0fee965faaa9',
    'lg36a52d0c-4d70-43f2-8461-70b7da86aaf8',
    'lg6052dbc6-4638-49f3-838e-99d79645010a',
    'lga2088352-143a-4e80-9194-b1d383f4808f',
    'lg82d3361a-3c3e-4e43-aa77-3d2a55a634e6',
    'lg30595df7-3fb2-43b2-a2bc-aba41c6c3a57',
    'lg50cc4969-6f8f-4223-8925-c0e1eef6b08e',
    'lg2d64068d-7b27-4108-9d20-64a4b9ece398',
    'lgcd14c2c6-a10b-4d87-9590-f7471147bb42',
    'lgad714c0d-a68a-4ce9-aae9-55b161ec3d31',
    'lg0614d910-a58a-49d7-8bcf-2f3208e5094a',
    'lg04716432-23ef-44ad-be89-f837637c7578',
    'lg239c29b0-7e25-477a-a059-a2abe3a1a487',
    'lgc2cb2318-674e-4552-a617-25c5b92477f9',
    'lgfee419eb-06bf-4bd0-bce1-4ce526c5262d',
    'lgd82ef7ae-6a56-4a55-812a-b0d7598dff63',
    'lg431f098f-18c8-4fca-a4f1-43218e26d1cd',
    'lg2fda2244-f44d-4c7a-bbae-23ae8d8e5f76',
    'lg1466dacc-1ef0-48c3-b0d7-c9dbbc53bd14'
]

var dbName = ['lgfb29637d-0a62-4b24-a72c-bed037076b95',
 'lgd96b0d99-cb0b-434f-938f-f5146c85e98c',
 'lgf744fca0-8534-4dbf-a716-8546940708c5',
 'lg568d6d7a-3a3e-4de8-9af4-21400a0be4ab',
 'lg9d676e1f-c3b7-4430-9813-6ede6703ee8d',
 'lge621deea-35f0-4dae-bdee-bd3567b9cbf5',
 'lg0e3f1b81-b992-4366-84a5-86af898d45a3',
 'lg032799c5-242a-4136-8765-3d862ca318d5',
 'lg963a6e36-c0bf-4a6d-8f2f-a62644217890',
 'lg59e38370-6e25-41e8-b145-794aae7d35c4',
 'lg8fbcb448-be6a-4d31-9454-368304b12e43',
 'lg155530a7-f1fd-4c88-bf4d-87ea2bbb0390',
 'lg4a9bc020-a96f-4e3c-a575-25aa60cdd440',
 'lgda3544cc-3ed8-4550-bc00-9d9a36bca1e2',
 'lg8de7f896-0edc-46f3-af58-e7d1dd04e380',
 'lg2b4a9982-50ae-449c-8d40-8e52548ae4ec',
 'lg3b307e3a-b61a-46a3-90f5-4e541cf65c14',
 'lge68c3df1-7c6e-4770-8e66-eab34ddbba19',
 'lgdc658679-d732-47dd-9888-05fdce07219d',
 'lg370806a9-8745-4c75-a60e-070b76397a91',
 'lg0ac2ffa7-b392-44b1-8e58-053cf32bb540',
 'lg01d52e0f-af7b-498a-ad86-185aa40d9386',
 'lgadcc03e2-6dd2-4967-9694-ac3938fe838b',
 'lga9c6dea8-bf0d-4bdf-b206-db6e640f210a',
 'lg1936140f-fc62-45e1-ab37-2c3bf40d6111',
 'lgf8b5e5b4-ed33-4051-b545-3d6384ffe80a',
 'lgbd7a4842-7ed2-4136-aecd-17662e32781f',
 'lg385cfc84-6e36-4627-8236-a3670ac23d1e',
 'lgae0c54da-4e99-4583-92a9-e27edc005241',
 'lgf592624f-3fbf-4325-980c-bd4dea885bb6',
 'lgb82094eb-cb4a-4649-8ac6-6cf01841be09',
 'lg70986309-345a-428c-b7cf-d81b20e13fcf',
 'lgaf6a1caa-cee8-4b8f-b465-541bef8877bf',
 'lg95df8efe-f61f-400c-b86f-504edad939fa',
 'lg119f3f33-9f3c-483a-91cc-8fd51af88560',
 'lgdef929d5-04e9-41db-94f4-d858f2069096',
 'lg2f22cb6f-4ff3-4d26-88d6-b5e7952471ad',
 'lgca68dd95-3ca0-441b-89ff-66474948aadb',
 'lg12440361-eb83-4175-97f0-1ca33836ac5f',
 'lg91b6fbc7-6e61-4976-965e-77238684f21c',
 'lg27394074-bd0e-4aea-81e2-ffc94bff7b8b',
 'lg94e7846d-6645-42b2-92cd-0d37ce96255f',
 'lg686340dc-0223-4cef-b9c3-58f6b52fc7e1',
 'lg01d717bf-2c5c-41f6-924c-a633bd01804c',
 'lga1f7646e-8a09-4050-b414-edbea8c6a880',
 'lg2dffb095-ca22-44f0-9000-7649f29ae6fe',
 'lg4348feff-b3d0-47bf-8c95-28450fead183',
 'lgcc9c31ef-6142-4520-a5eb-9116c6018366',
 'lgeb4b6438-ef95-4038-be8a-cf02d7f77651',
 'lgcc95936d-099d-4bfd-b179-9bd7effdc109',
 'lgaa04fdb2-6c55-4e3f-b307-0d950ec4837a',
 'lg8c7839fa-79e2-4cb2-b5a0-53060d352ca6',
 'lgb562c17c-6962-4122-bd94-985b74d44b17',
 'lg28c28406-82b0-4ef6-bd58-ac1dbec03904',
 'lg8a661854-9ad0-4283-a207-e748fc0d2ac7',
 'lg8724bc61-f2ab-4f19-a510-08cb749e251b',
 'lg08451f63-e006-4d84-8510-ebf4ead37119',
 'lg22b5d0ba-fe06-4de5-874a-112b6519cd8f',
 'lg6844a491-931a-4680-8241-f83dabf0ae60',
 'lg50c0415d-c53d-440a-90fe-83bd78b7800e',
 'lg8e6fea29-80f6-40ee-a185-5b8e9e405fec',
 'lgd8a1dd28-6984-423f-bd33-910a4062982f',
 'lg791e84ab-835e-467d-b169-8b895da9d899',
 'lg2cad324a-a0f3-4d1a-b247-08916006382e',
 'lg9c877a0a-eed7-400d-aef4-86a9e2929008',
 'lg0ce457b0-b560-4f7f-9ac6-817bcb7d393f',
 'lgca12c5af-0d42-4e0c-973d-d1f64dc87907',
 'lg76cdd64e-fd36-4f36-8d17-0bdf80fe9a92',
 'lg7c54766f-5df1-4aba-9bf3-c6cc081f9583',
 'lg4e3d393f-716b-41b6-a7e1-f2ba46e988ce',
 'lg5a5c4405-570c-4283-a9e7-04741694bc60',
 'lg16bab861-6c21-43d1-b6a1-6beeb8951016',
 'lgf106ccfb-a0d0-4949-a6d8-12d699cb1887',
 'lg7d824028-50c9-405a-a7d3-533bb0441a29',
 'lgc8be3b2a-8a05-4a8d-83f9-6082487e38e8',
 'lg31c17452-9133-4c05-a203-409ba5bb3789',
 'lgdb082302-aa08-4709-a5a5-fa5d14281d7a',
 'lgb359b19f-ee78-403c-a60e-d4896122a30e',
 'lg3530af00-813f-45ca-b701-56fdc4cc6155',
 'lg356560e6-6f29-4fbf-bbb8-94c383933b1e',
 'lg32ed1057-48d6-4f56-b4b7-c05d0c536dfc',
 'lg18d8e8c4-b563-4974-9fdc-a96e2bce27a7',
 'lg83c7afb8-e791-41bd-b3cf-4b33705769e4',
 'lgced1da1d-6832-4a29-8cad-a56c6f0f3c81',
 'lg7b14fd07-d19e-4f7a-853a-dd3cd1f0672d',
 'lgb31f09e4-3308-49ed-b0e1-043c58e5c39f',
 'lgdefd4aea-9bc8-46ed-aaad-2caffde0c115',
 'lg9769ecf2-7401-4bea-a70a-05f8b0808ffb',
 'lgdbff05b5-1d64-46b1-8ed8-56cc9609ceb1',
 'lga9606432-9520-4716-afa1-4cdc2101281f',
 'lg51852059-65eb-495e-bf9d-6c82c939fcf9',
 'lgca96daad-730d-4d13-8027-16f6fff7c7d9',
 'lg07acd4ad-643e-49c1-b4e5-90fec55fa813',
 'lg682aaf42-63d4-43d8-8e16-a042b9c41c9f',
 'lge7b87aa6-f704-4937-b617-c6c775ff81b5',
 'lg2186eac3-4dd7-4ae3-b20b-43888fd501d3',
 'lg80188c6d-55f7-429d-a0d5-f6cf2c3a934b',
 'lg7d806b50-dc26-4d2a-abf6-10c0c3c5accb',
 'lg31b42e4b-5ef2-4031-8b6c-86e3032b31e3',
 'lg73a903b4-2434-4b8a-87d3-7abb9c769155',
 'lgcfd71890-977f-4833-893d-12b4bbdef02c',
 'lg1bba0f2a-ba52-43d5-b727-c36371b6df3b',
 'lg2a20bfda-a62a-4e94-8c01-e60f2110cbd6',
 'lg78e0eef7-34b8-4918-b7bd-d275d3f7d66c',
 'lga8019e9e-184c-4d04-ba69-30daad3b3598',
 'lge7dc4825-163b-4b87-9250-c0baff083f56',
 'lg4b532804-920d-4b17-bb90-a39fdc3f4b43',
 'lg941eebe6-33f8-4e3f-b00e-b0548d20a3e0',
 'lge7fcb1a9-1c57-4f93-8179-e14e22391c9c',
 'lg86814b88-96b9-4160-92b8-91e401cde982',
 'lga282275c-0ec9-4032-8c73-89896e00dd88',
 'lg9ba894fc-dbdc-4514-a35c-c0fb622ac65e',
 'lgde485ee8-30a0-4f75-a073-e8480fe57ee0',
 'lgbb433fe8-c151-40e0-967f-272dab587c03',
 'lgcf7bc4f9-db8e-44c6-bd2b-e9199ede751a',
 'lgc5511d5f-6624-4c89-9598-ae0eebbdee04',
 'lg790c4820-8125-421f-b9d6-2fc57f833051',
 'lg3a710e3b-9580-48c8-af05-ccb2c822eaae',
 'lgd25813f9-cdf6-4d15-b9a8-ee91e72f442c',
 'lg282b1cc4-e560-49e7-b8a5-a7c3b1317a66',
 'lgbc4c09b0-f7b1-447f-8092-5065ec34e6b3',
 'lg26beacb6-d6cc-4d6c-9f6a-d7d871b439e2',
 'lg483d21d8-3eab-400a-b62c-a10054997b65',
 'lg559da5a5-8316-480f-b857-c3aa29d9286b',
 'lg5c0ef615-78cc-4a4a-9882-f6314e5f8682',
 'lg51fc53c9-226d-4a56-8737-feb3147b787f',
 'lg3feb10ff-6b68-4318-87dc-d699d25d0fc2',
 'lg65415e2e-3bee-4c6a-a1bd-220901bd2c66',
 'lg35505c2f-5c55-41a9-b3b3-d086f1be9da8',
 'lgeb562c20-e6a1-4c8d-8561-1e8b7a226da0',
 'lg9422d6fb-f694-443c-9c8f-2cf0bbdcb088',
 'lgba6804e9-bb2a-4401-abc8-f42daea56553',
 'lg1f858d65-7c06-4bc3-a9c6-d52b4f8cf52e',
 'lg0553f8dd-52ee-42ca-8d00-a93b0ed04408',
 'lg4792328c-fc1c-4bd8-aaa3-c1326df4f834',
 'lg934589c5-4b10-45f1-b8bb-6af713cc8698',
 'lg1c7886d5-be59-4656-a37d-b159352a6a4a',
 'lg4625bf71-a7ac-4d8c-af5a-978ddaea4383',
 'lg46a25115-287e-4a70-ac60-238805cfd863',
 'lg8afd0c6d-75ed-4041-87af-c6c5c77134b0',
 'lgdcd0f293-9c8d-4e0a-80fa-52102d62c4c5',
 'lg4d098542-1473-41ed-be14-2a8f93ffcae9',
 'lgcebe5366-d0b7-411c-9b4a-bdd600892d7d',
 'lgb53993f5-0760-4e18-86a2-308fa1867000',
 'lg2e9d23ab-39d1-4637-b3b7-c76fece785ea',
 'lg6e2524b3-500b-4c9d-b8ef-1259410f4581',
 'lgf85748e1-0723-4472-972f-f61d1a8b00e9',
 'lg364542f2-3f9d-4a17-a957-be99955e970f',
 'lgf20474b2-4ee3-4224-89f3-a7cb231190d0',
 'lg1813b58e-6357-4919-8976-045b2d916fc7',
 'lg3a9a894f-26b1-4f43-8941-38173a0953ab',
 'lg079f0799-692d-41f1-a5e2-603725977ddd',
 'lg6d7b4bce-bfdd-4219-b730-c778a788be2c',
 'lge76ffdce-ba83-41c7-927b-bdeadc24623d',
 'lga2a845e0-e7ad-44c1-8de3-ace17a00a19a',
 'lg520600e8-4618-456b-8488-7e6200ebc961',
 'lg479cb22f-9d72-4dcb-a274-1f8225e43e6a',
 'lg5381f09f-7828-49da-883c-e66fc4fc1737',
 'lgfceb1514-c429-46c0-800a-8249c9fbde38',
 'lge93011c3-81a9-425f-bc10-95c24aa90fb2',
 'lg4ff31732-3c1d-452a-928b-563d19eef57e',
 'lgf6f0ee57-12ab-4772-99b0-cb59b3268836',
 'lg8cb30c98-44cd-48bd-9110-482878540434',
 'lgf5513882-a16d-4153-8773-47b744c41909',
 'lg76d3cab2-55f6-49d0-8b81-91f47c8b162a',
 'lg3ff32fad-808d-4a6b-a39f-62876add16b4',
 'lg8c264e3b-be17-444f-8b2e-672e5ec6868a',
 'lg4ff1466b-0fcd-42bf-b509-037c40e510ea',
 'lg00358908-4456-483c-93b7-8a2299902e6b',
 'lg14aca0a9-0b8a-451e-9647-d28094c79df2',
 'lg157a6715-33d0-46ad-b3bf-257f4d8e4028',
 'lga1593793-0fca-4da6-adcf-4e91c01eb468',
 'lg8613f89f-7899-4578-a000-5c383640bcc1',
 'lg1c9b6502-0fbd-44aa-b098-afaa06d828ba',
 'lg153704a1-a03d-4ac7-9565-d5a6bac0c938',
 'lgb82781c7-bdd6-429d-9cbb-c6332081ea3a',
 'lgf505f8ac-667d-47f0-8ed8-ab9aa3ab0bdb',
 'lg315ec541-d4df-4e96-829e-859aebd067c3',
 'lg83eefb30-9c9e-4f77-9b94-14ae7f1464d1',
 'lga95c09f2-a9e1-4c02-b643-43e99d377ad7',
 'lgcdb49b08-9484-4abc-8874-1717438fe6c9',
 'lgafc2948a-134c-4677-9c10-a601e534ca8e',
 'lg562b1792-ba82-4a42-8f61-85cd2f7f26bf',
 'lgfa61d7f2-e83e-45c0-a904-d48bb1d030a2',
 'lgc885a7f3-dc92-4dfc-a33d-91da9887b1eb',
 'lg1e9b3a40-2ee2-4bcc-9968-f657c06e1d49',
 'lge8d324c5-894d-4b6a-9930-9d835934fafe',
 'lg85986ad2-5d36-41df-80fc-a75eeab63949',
 'lg29466d9c-326f-416b-95d2-64c5d4982e76',
 'lg7c04611e-0a93-4122-9fdf-20b83f8e9267',
 'lg83dc7b19-3fd9-466c-b196-17907d5d963e',
 'lg78206fbb-3f0a-418c-9f58-49f8de5641b7',
 'lg03dee413-202a-4e6b-a618-b92f5c6ae37f',
 'lgd6bade3e-b6ee-47be-ad6d-27eed5612590',
 'lg4d91d4b7-a847-468d-97f0-c34728b52e0e',
 'lg44f2fff2-dc06-454a-ae3f-7cdfc503d3df',
 'lg8bf136bc-6a10-4a1c-92ba-70e5ffb9871c',
 'lgdc6b9017-802c-4e33-bd66-3daff2fdc591',
 'lg713a0918-a2ad-465f-b935-e84561900c49',
 'lg138ed88a-e1a8-4777-8482-1a5fbf0f349b',
 'lgf50c67fc-8791-4bde-af10-b555b9bde88e',
 'lg2787dd24-18f6-4b8b-8de1-214f2bfb6b42',
 'lg48562326-7c06-4e42-a898-6013974ccd3d',
 'lg24330142-4de0-4bab-9e30-8999cc9db2b2',
 'lgf792dded-a60c-4582-934a-5e9571abb0d1',
 'lg444014f4-b637-4778-b55d-29de29b13120',
 'lg1868345f-5061-4773-917f-977fad89f45c',
 'lge265a6fd-a683-40a9-a983-ef7132f4544b',
 'lgcd48808d-fff7-44ef-afe4-b92af46ab45d',
 'lg6b79a77a-1f7f-4dfd-a1ff-ddc0f8af301d',
 'lgcfacb5e0-4d81-442f-a92e-7a6ae1e92ab6',
 'lge99b2d02-7ec8-4fdf-a7de-f5e3e3159df4',
 'lg8f38f4d4-a453-4148-8302-7c91fdd7655e',
 'lge7b68559-2870-4247-9ae4-bb2613b4daba',
 'lgb977cbeb-0dc1-4eea-b050-53672e819573',
 'lg24ae132b-cd14-4a5b-94c8-32b35b7acbb7',
 'lg5f5069ec-0fd0-4ee9-b5dc-5169cea76da6',
 'lgfabe4fd1-5ccb-44b0-9e75-e34d94e70bdb',
 'lgdb89ece3-115f-4bf7-a371-f76b4a9320b7',
 'lg8111b426-997f-4b8b-9fec-10b871926df1',
 'lg94d2003f-664c-4c4a-9512-d924c91a37b9',
 'lga6ab752b-aa35-4b04-9569-465b9649ee72',
 'lg918ced00-3343-40da-b77f-c22e7d36b130',
 'lg82c58b05-29cc-42f2-b4a4-5631984e725a',
 'lg10d2a304-4d2e-4116-8e5b-c5b881a7231c',
 'lg0076fe32-3e94-4720-9c5b-58ffc3278688',
 'lga3ede043-b296-407e-97d9-038e977474b8',
 'lg32ed5be6-bb11-46f9-929c-e38c22cd94d1',
 'lgdcf6ad6b-1fa1-467e-9c02-34e82a22ac42',
 'lg57380714-25aa-4adb-ae48-11bb2335310e',
 'lgcd68698a-906b-47a4-bf4c-502112132803',
 'lge4fd35b3-b587-4f6b-9df0-faa2b96f44f8',
 'lgc2aeabf9-756e-4bd5-a847-a343eb0e71e2',
 'lgc8aebadf-12a8-46d4-a9eb-d4b0874635d2',
 'lg731dbb1b-73ca-481b-8592-670a8737e3d2',
 'lg091ad709-9e6a-4e82-bcbe-227f743888b9',
 'lge392571d-1c7b-4952-8136-3423f5909dfd',
 'lgaec8421d-c9f9-43df-9e77-facd3f557c72',
 'lg436a77a8-f94f-4c91-9ee2-d4c481ed768e',
 'lg41e78268-a93c-4185-ba81-8e0c75f5b8b7',
 'lg4483810a-6c5b-4435-b28e-b539befc7a37',
 'lgecf8ee86-e715-46dd-9ae9-9f57b2486185',
 'lg931ae29f-2026-4101-be74-7fceefe68df1',
 'lg4a3e215f-a0cc-4b44-9610-f97931d39481',
 'lg3aa5afee-c4fd-4bae-88ff-7368dc0ba09d',
 'lg830e6da7-1656-4fce-bf76-04cc6ed25f9e',
 'lg76934537-bdd1-4d5e-ad56-30e4850a7154',
 'lg7e75a4ec-910e-4799-8642-d69239a11e36',
 'lg833a1ed3-419f-4fbb-884f-9b8aeacbedfd',
 'lga2e6c4b1-4d2c-43ef-b13f-bf64a4b82036',
 'lgf1649c8c-bde3-4f2b-8f11-20c970948f5e',
 'lgb7c4dd27-27f8-4c37-8f51-c3fdfa7d2708',
 'lg9102e4b8-925d-4d7f-bc93-3d4206d9ca57',
 'lgc93e799a-2fb4-4672-ba4d-e2f4d64b5b36',
 'lgc254cb3d-701a-46f7-8fdb-9f12567c82d9',
 'lg967ba12d-59fa-49a1-b4c7-7884fed70f29',
 'lg5008db2f-e4ee-4115-aa15-2e52cb0ff148',
 'lge4196c29-d12c-4b94-9617-10d9595f2616',
 'lga8012c11-ed56-44e1-b6f3-3107c68ebd89',
 'lge5a1c251-3a21-4d9a-bc56-a3e494a38a4e',
 'lgc6fe5453-be16-4e68-be32-eddc6980a139',
 'lg67b151a8-3e0b-4ea7-bd4c-1893e60e27f9',
 'lg7e711aa0-ed2c-42ca-8994-34a54b867065',
 'lg70a69245-0f42-4e30-a89d-504bff20f9f6',
 'lg44f1fb18-0119-4e9d-bf95-17823602a670',
 'lg51fe77c5-b1b0-4908-925d-a753d1a2399a',
 'lg9a4aaa9d-21fc-481a-8591-c6194809d140',
 'lgf1d384fd-f231-4c76-b887-615a6c461bf9',
 'lg799e0ce6-2a81-475e-bc9a-6d62446bbea7',
 'lg2876f847-2abb-4fb7-a4ca-cbbf4df12336',
 'lg13344b2d-4af8-4b98-a4f0-3bd6f1db48d4',
 'lg6fe650ba-c5bb-4c6a-ae93-6ce170843113',
 'lg1d2c9afa-5355-4a7d-91dd-310dfc6a3ce2',
 'lg6243a67e-460f-4106-a618-59389cb805bf',
 'lged6d935b-1876-4b6e-8a71-93137a7414e8',
 'lg56a171a6-7a37-44dc-be83-b323a38888fc',
 'lg77e2a1c0-9de6-4859-8dd0-7eada900b240',
 'lgb7655d06-bafc-4746-adae-eb44a46564a8',
 'lg8f700e50-303b-4b59-ab8d-d8e6c8bfd259',
 'lg12a1e422-79c2-4a52-ba0d-6979a79aa20d',
 'lg763c7584-aba1-42bf-9e8c-4c97e37d53e6',
 'lg9a94d094-b8b7-4c41-a2bf-9374a5f8aeed',
 'lg47346ad7-bb56-4a0f-aabb-6d8d9949dca5',
 'lgd583deed-4d2f-455e-b82f-022966ceafa9',
 'lg78411f9c-bc7d-4265-8581-448ac8e456ba',
 'lg887b2107-f2dd-47e2-bbdd-011d33ba7399',
 'lgf4dd8317-45fd-4b01-94d8-1febdbf3aa26',
 'lg1aa4781d-ce43-4df3-8f7d-9ad6573b8c19',
 'lg876a3f83-964e-458c-9250-ca0504e92cf2',
 'lg2385d558-2245-4107-b5e5-bd13bea7e74f',
 'lg7cf1fcc3-288e-4b0e-96eb-34ce406b0128',
 'lg69d569cf-f62f-4e6d-ac6d-21ceb7ea51cd',
 'lgfbf9f38f-3726-4702-b6bb-55a158f4ccfe',
 'lg166ceccc-9599-4eaa-a46e-dd25fc3a8774',
 'lgdc535f49-16a8-4a8c-87b3-ae6049eb158e',
 'lg67a51d22-bddd-40f8-9b1c-22656c2ea57a',
 'lgde23dc34-ad74-4bbc-9bf5-6aca79ba2592',
 'lg73f06461-865a-43df-8a5a-812891fe958e',
 'lge6e09ce6-3023-4f8a-9dfd-a95494c60e6d',
 'lg2224f7c6-dc46-40d4-a544-adb1c9c2008e',
 'lg15bf4a8d-85c1-42f6-92c6-b6bc4590a996',
 'lg7bde067c-fa42-4f73-94f5-de5bdb177ebe',
 'lg98731de3-d45f-4211-bc27-9ca553ae6388',
 'lg19a4e8d8-720d-4ea6-bf8a-8c72b67a819c',
 'lgfc2e5a93-2a66-41cd-93a6-1a62281ce012',
 'lg71a813a5-c3ec-4af7-85ad-63c211d2deb1',
 'lg73ae0ac7-e080-44af-9b2e-f0134b043caf',
 'lg37444457-a99f-465c-8a4e-505c8801f9e1',
 'lg5fd4e8f7-fd60-459e-a0b6-0fe4e4e2c0cb',
 'lg3c82552c-eb9f-442a-a7b7-f567df321ed5',
 'lgf4240ef9-869f-4a8c-8508-3575ae1a66ad',
 'lg1c140d9a-b717-4bc5-b4a3-a45df09455e0',
 'lg37162fb5-c94d-428d-9c2c-0084c1ac4091',
 'lg5482f39c-bdcc-40c0-a19e-f7bdb80fe393',
 'lga7ddcfd5-efda-4cfb-a62d-e0f5b927cdec',
 'lg4ed1083d-afc4-4636-9e58-0e0f685d7fa6',
 'lgcf7adc14-7811-4778-9ae6-cbc689349971',
 'lg7ae44e70-bcc7-4b03-8fce-037d0bb0d433',
 'lge3dc359c-f610-4ec3-9495-c0eba0fca563',
 'lg073b2b11-447b-4da1-ab12-9f3f5956a2be',
 'lg7e08d851-13b8-441a-8e5e-0f20f215f68a',
 'lgc5f405ed-998d-446a-bb91-dd81e2da58c4',
 'lg44ad09b6-5eab-4b02-8a94-897c07de5102',
 'lgc750f235-c12d-4255-b36e-900d07dc7638',
 'lg18155ad3-22e7-467d-bf33-c9949af41ee2',
 'lg82097662-3caa-443f-9f86-ca2e262b581a',
 'lg145637aa-03f6-4148-86fb-9f2d61c06c5e',
 'lg107dcaa1-3894-43c1-88e3-545522573fe3',
 'lg71eade82-20fa-4307-a98a-5fecb5e46d1d',
 'lg45dcecc4-e20d-4f91-b282-ae537f714638',
 'lg62f8a428-69e0-485d-9be6-f420fa2a4710',
 'lg877f5bec-8d61-4416-9192-1dd4cd797198',
 'lg8dfd375e-e48f-495d-b930-2a8b649867ec',
 'lgf6c31e37-4305-4d1a-ab8b-beb7eb271db7',
 'lg496742ad-3167-4f72-9e5e-4724c5d597bd',
 'lgee0616b3-1a82-44f5-89ee-8a4dd0181834',
 'lg37e11bae-e6c6-4c64-ab42-6e90244f8d9d',
 'lg2b93ce15-172e-4aa2-8115-f70a3781764a',
 'lg74556ea4-5050-42fb-a900-94a6223fa777',
 'lgbc372b3a-9ac5-4572-ad90-6034aaae8ae4',
 'lgbc907b1f-47fa-45fc-a2e3-a32e17db43c2',
 'lg18352267-0dde-4214-ae3b-7c1c77d45006',
 'lg2fb049b3-77c9-40dc-b4ad-3acb09814d55',
 'lg0e6d5ee6-b26f-4f30-8451-44964d997a58',
 'lgb1a71f4d-4ee4-462b-afc4-b5f055ccb2eb',
 'lg48f2fcc4-51ad-4b20-b63b-1f709dcbd596',
 'lgb2e9193c-f32d-493e-92e3-205509b73398',
 'lg2b113c74-92be-490a-917c-4fa5ce9d43a5',
 'lg83e8ac3f-4ecd-498c-b40c-4a1af81957e0',
 'lg20ffc27d-ed2b-4a7f-aa01-52deb25ca0ab',
 'lg9a99e5a0-3fa1-4a00-8622-14c9ef758ad9',
 'lg34b56e0e-8354-4782-8dc7-9b6495aa1d01',
 'lgd43ba25b-f585-4321-8b2e-e507710fad97',
 'lg504f3d5c-5169-4e9b-9a3a-941dca7da324',
 'lgc227d8c3-08ca-450c-83a2-2333a253b748',
 'lgfc718323-a7f8-4c2b-89eb-6a72ab326ceb',
 'lg39979510-ebd2-4b3f-b64b-ffe916ddd8ab',
 'lg9200dda0-5cf3-45ac-b84b-e6b7b0ffc533',
 'lgad22ed02-b452-4969-b7e1-dfaeada74efd',
 'lg707ec28e-b09d-43d4-a01a-7280a7a65374',
 'lg9ae03f28-884c-459a-a1a3-833899f426c9',
 'lge96fba4a-9fb8-4ac3-8a5b-d285b630d3e6',
 'lgb4b8d93c-e175-4d2b-b320-8b9babde6e73',
 'lgb2bfc903-1912-4a6b-a30a-4dd2dfab1857',
 'lg127b7e77-b54e-4176-a0f2-e9a19f2cf88c',
 'lg2effbe0e-b853-4d66-ae93-930a9b88a011',
 'lg3b1f0e87-137b-4806-8753-2ad400ce9a6f',
 'lg98118871-7c25-4f53-8fab-94c41ce7ae2e',
 'lg94bdce5a-cf40-4895-9b62-9aa10fa17e66',
 'lga4cf1bfd-e9e2-47bb-a156-f4492185a3f7',
 'lg0124107f-581d-47f1-8a81-9ecb315ce00c',
 'lg27728533-fa01-439e-ac23-e4e66b4e5173',
 'lg5d10750a-8028-4f12-bf60-d4313f4f5988',
 'lgb0139bb2-8270-4021-99cd-a2ee002815f7',
 'lgb0047f3b-745c-4fa8-9d48-7520107235d3',
 'lg7348e6e8-66ca-457f-9c0f-5ab1c2c028d0',
 'lg83a7fbbb-c966-4c94-bc26-793351415157',
 'lg1e85e3c4-5e8b-4e12-a1e7-e358516dfca2',
 'lgc016ef99-2c67-4e49-90a7-1b8ee5c52cfd',
 'lgcf1a7dea-6457-4f84-b6bb-b01fc63aa3c9',
 'lga1f7c422-486c-4468-9aad-aeb4c4f2ac01',
 'lg90448960-aebd-42e5-936f-5ebbf816befb',
 'lgeff307de-3d45-4fde-b36d-67bc6e5a9f66',
 'lgba2ccb44-eac2-4233-ac35-417a8537db96',
 'lg443e693b-69b9-46ff-9d43-7410381b12be',
 'lg95c7f8af-846e-401b-9b13-4aa3b55b2aef',
 'lgfb98bde0-d6ff-47e6-b40f-4b05c3843777',
 'lg19fbc847-f68f-4052-9edc-76261c39c398',
 'lgd2ed5d59-6fbc-465f-995c-2b9815748e80',
 'lge2f7288e-6637-43d3-bbad-4a13967aee97',
 'lg77d4c2d3-2127-4f1e-bb89-c78456294e13',
 'lgb39bd0e9-0460-47ea-b87f-589a47ae91e8',
 'lg90f5d379-6cfe-48ef-b822-2e25b566c29b',
 'lga5f90d56-9ef9-4c17-bf4c-6cb6b4e45f50',
 'lg95cc0b3e-dcbe-4489-988d-40393b63b617',
 'lg43001ceb-afea-4716-8510-20bd3c409ca5',
 'lgf5e6e419-1064-403f-9222-bcafa9462fef',
 'lg8d7a0c19-be5f-40ea-8ef8-da7354ea6005',
 'lg0604262a-d9bd-41a5-aa08-28818c0b56c8',
 'lgc3968b02-4ad8-4b46-b467-2de116730b05',
 'lga645c078-5dde-441d-b116-e549787e8f44',
 'lgc393d7e1-5246-4c7e-9239-10173fa9f918',
 'lgc880f679-ce73-4552-bfdc-d3275dc86d9f',
 'lg9c6cb25b-fa71-4acb-9955-7672e88b7c3c',
 'lg757dfb5e-a066-47cf-b317-c72e0bd7debd',
 'lge3f82191-fca0-4df9-ac4b-8931acbfa534',
 'lgc2a7ffd4-7edc-4787-84b5-f894125d8f00',
 'lg87fd2cfe-322c-4dfe-8412-ec1569d0373e',
 'lgdd39eab5-341a-4e97-80c8-e2d299a1e8bd',
 'lg56135790-ae73-42ff-8ee8-8e37ace2295b',
 'lge58dc4cc-3e60-4134-8b12-98cd29fb645f',
 'lgd4eb139e-bc96-4d46-8dd0-101674c01eb9',
 'lgd77e7a1a-b2b3-4cf2-bcdb-14afc001b7a9',
 'lg7420c3ef-e532-4f6c-8e62-1c969fa3e235',
 'lg4dc3a7b3-1bb7-4bc6-9bab-f433404134dc',
 'lgfbfd9a71-a5be-4098-9e78-7130a0ce5a47',
 'lg82096e59-72ad-47c4-b22a-c6fa16fea139',
 'lg48194a39-f17e-4a8c-8e2f-45373587d094',
 'lgfd78d869-ed27-4ab9-b129-018c38737a60',
 'lg987fc79a-e9d3-46d4-8b3d-226bba99de05',
 'lg0d7fc073-33e6-4a47-9c5e-ae78f57df7d5',
 'lg0555e7dc-1ac4-4c3e-9da7-9f5fbe8b8f5b',
 'lgb7f8c851-5565-4276-8bf3-2f26d80d9b3c',
 'lg0b4b493f-3217-4bf2-8faf-66341a1ebecf',
 'lg127802e4-4013-47dd-82b9-b262e0546bdd',
 'lg2278389a-2bb7-4a57-b7e8-c445092682da',
 'lg02d9477c-ff9e-46ce-ab5e-52c46519e049',
 'lgafcfd483-a3ce-4f8a-9265-54c5ea1b7d33',
 'lg7fa76dd1-2720-464a-a7c6-6fbfd5bb7905',
 'lg726fc498-b90c-4901-ace3-bae2885f9e5c',
 'lgc9d21fe9-38b6-4f00-9064-495002044626',
 'lg78f45856-f77d-4d7b-9a75-941adb58eed2',
 'lgeffe9ea2-4124-4481-ad8c-b98cef437b8f',
 'lge574164a-696c-4bbc-9eac-5b8e95c7802e',
 'lg1fc58a38-cfca-4046-8d72-b48c092485f7',
 'lge7d90a73-cc47-4e1a-837d-45e609943529',
 'lga55ace88-5cd5-4b59-8024-dbff008e84a1',
 'lg3170a2a3-f4a0-495b-9288-8cedcf1a735d',
 'lg2d0308d7-a23e-4098-a4fe-b3a712b8ae0e',
 'lg862148b4-d64a-480e-b59a-247cdd6fdecb',
 'lgd7b7a71f-8505-4a81-9cd4-9ff738f343b4',
 'lga57fcfb5-dfaa-475d-8165-de8b9dbdd62b',
 'lgbac3ce75-c177-46d7-9a92-f372eb018d59',
 'lg741be3b4-50cc-427c-b188-01166b2f6e98',
 'lg24606a66-f8c0-40ab-9176-6d5b257f2a48',
 'lgc9b42f30-bdf7-47d9-8133-e84ed6b6b406',
 'lg7f3851a1-6a23-4ec9-b086-e057b6d8c1c7',
 'lgcb202aec-10a1-4a6d-ab71-5bdeac057904',
 'lgb5c5cc16-d60a-4e38-b2b0-ad64036234dc',
 'lg9ecaad14-0932-4359-a38e-99bedeef9e89',
 'lg07860c70-e77c-42c7-8dd2-3276f13c2fcd',
 'lg78f8e062-1dcd-4c46-9475-3788540e8000',
 'lg90dba0c7-5971-460b-a883-b730a2d2e006',
 'lgd61e1914-24bc-4297-bc54-8e2c8fcbf1e3',
 'lg55ba188b-7817-4d74-9911-17f3e998f78f',
 'lg811538a0-d206-4748-ad15-d449b59ba2cb',
 'lg23a77558-4256-4a5e-8d4a-3cd34a9cd602',
 'lg594ea2c6-c705-4569-9489-0d4e368c22df',
 'lgb9ed7603-0a00-4982-a1bd-7fea860ab480',
 'lg2875677f-e619-4e3d-97cb-47c4fa04be05',
 'lg062bb4b6-180b-4ad2-b4b7-96284cf39973',
 'lg59a3a265-536f-4a46-9088-4bfeb1b3d552',
 'lg9fb0cff8-23f8-4011-97ea-eca87d762d48',
 'lg1dd2f716-2a44-417c-8694-4c0c1da465c8',
 'lgf32d7732-c138-4acb-9ef2-8253c7306986',
 'lg12c1fbae-9ac2-4815-b582-fe26da4671c1',
 'lgaff1f6de-6754-4b8c-8107-9497878afc57',
 'lgd26f6881-4841-457d-acde-312e66ea2469',
 'lgf214fd65-f50e-4432-b292-30d0ed77ce90',
 'lg02398841-6c4e-4dcb-a361-fba7cbcbc5c9',
 'lg61d93ab8-dcd5-494c-9b22-a3a335447726',
 'lg7d18e84b-81a4-4bcb-adb5-d7978dfd8c3d',
 'lga9ac824a-2f29-4932-9247-95c6503b80ac',
 'lgbf5d068c-09b7-4008-9db1-69a4faa3a5c8',
 'lge6e8931f-7000-49be-9125-59f9d428caa0',
 'lge767a197-e129-4abb-809b-3a02eb59e8cc',
 'lgc96b9901-4349-4c56-aef9-4d5740225c50',
 'lg6b6d299c-aad2-4364-a89d-260f3a5472a8',
 'lgc63e6955-3f43-40d4-a257-fd304f0957bf',
 'lgb4252ee6-5412-4e09-aadc-8bb18cf7ebc9',
 'lga1d8d07b-f195-4c71-bfe6-7899d37d8a12',
 'lg5c36c14b-ff2f-425c-a397-65e107fe6e8f',
 'lg3471f667-292a-40f4-a1e7-12c55b9fdeb5',
 'lg5b5fc5ee-d7c9-4d02-821e-64cfbfbb1026',
 'lga8b44e31-4892-494b-9544-1bfe94856d57',
 'lgba500ea3-53ac-4791-ab16-73dc4230edab',
 'lg5f1b0335-a390-4d66-b7aa-82a452a52e83',
 'lgd72791ef-0dad-47e8-a77f-d2a6aae60344',
 'lg052b09d0-9e92-49d0-a7fc-d0ae1f2f2476',
 'lgd533462d-6ba3-42e9-b48c-e2b2bc026ff7',
 'lg52582ed7-882e-4d48-ae93-4d81a0b82ae7',
 'lgcb036013-df99-4839-94ed-e76874e14728',
 'lg4516e397-fda7-4f48-99d6-f9b6035241be',
 'lged9fb221-0cb1-4e04-8434-1b00f28923ef',
 'lg1a043cfb-1aec-4dae-aad7-c20ba0ebb306',
 'lgdbd17031-3f35-46fd-8e0f-ae948883a633',
 'lg97b27966-115e-4d4a-b082-c4e2e9955afc',
 'lgefab81c5-3429-4311-b4b0-a7f6dfcb6489',
 'lg944d7fbe-3f7c-4db5-bc42-4a80f4320467',
 'lg900bf2b5-1c1f-4b45-9f5e-f2f8b76458db',
 'lg6c0abb41-67e5-4883-85ff-bc302f0bf5c2',
 'lg2db6d430-a760-4bba-994e-a12d01f696b6',
 'lg617c3157-46a6-4c25-afcd-367cbad65b97',
 'lg72ad4ad8-4801-4fe1-80e0-ae94e47a7770',
 'lgcd7ff45d-6e7f-410b-93e4-da7e869fb235',
 'lgb7c1be39-884f-4dbb-8958-85d64790404c',
 'lg555b6a8f-7342-40a3-806f-e2a6a5e1e79b',
 'lg2e1662a6-0de5-4623-ae06-1f989bc20cde',
 'lgd1138a28-ea98-4949-a412-0847f91bde74',
 'lge9e358d9-93fd-4724-9da9-c04e17fafff1',
 'lg48f49379-6206-4e7b-b2f1-a90218146acf',
 'lg639648d5-aa55-4e53-be3b-86516b85e342',
 'lgaa9e05ab-41cf-4eff-94da-4f0b4c83c210',
 'lg9cbf0534-9dd2-4a08-a69d-ac319a41132c',
 'lg8e261263-9da2-4347-9c67-8723de7fd6ad',
 'lg244df1d9-81ed-41a9-b3f3-a21c189593f4',
 'lg79811747-1924-47e3-b1fe-a629524d2cca',
 'lg6b364e78-37ac-450a-8685-2dd2db03c5bf',
 'lg322c7313-7998-4b12-a7c7-7c97eb4da52f',
 'lgcbbc79e8-4570-41e1-9984-cd4013b20aac',
 'lg6d839a5e-8c22-4816-bb88-450667b71891',
 'lgd3b078a7-e845-498c-996b-696a81438abb',
 'lg64d6386a-19f2-4c87-ae28-057f82d80e22',
 'lg1899650e-ced5-45af-bcf4-3b6dac5f47d7',
 'lg810ee6b7-c11e-41e4-af5a-1aff60720269',
 'lg41ff3be0-a08d-4c17-b0d4-e1e72668f917',
 'lg22d40485-978f-49eb-b249-a4cd762b072e',
 'lg06839124-6542-4b93-9b71-10f3a792aa23',
 'lgfa75c30f-cfc3-4a30-bd1d-d472a8bc832a',
 'lg36b83cdf-cc6b-4067-8ecd-8db565a4add7',
 'lga9cbddf5-3274-48f8-bf81-57a58838633c',
 'lgf2c61420-b98d-41fa-8ea6-c6709a7adf68',
 'lg63e7f627-be70-4e67-ad14-ee02ee479248',
 'lg4426d470-c3fb-46e5-a5d6-095cf57d9376',
 'lgc50687da-915f-400a-8039-91850492b6af',
 'lgcf46b718-0017-4371-9e9f-8d2071d89c36',
 'lgfadafd56-a069-417e-acf0-29745045df38',
 'lg31742b57-c47d-4cee-9f1e-f65e59111b51',
 'lg34c7f9f4-f071-4dcb-bb36-28a7f912afb2',
 'lgadac31f1-5472-4099-b955-60988f7bc8fd',
 'lg2b77fda4-e63b-408f-b42b-bf34be3c0f09',
 'lg4e12fb03-0136-4415-958b-8cb9a9b1d7f8',
 'lg37030e42-b109-4a9f-a424-67b444eb7c37',
 'lg106cb9c4-a032-4550-9cd4-e3fdfa080a83',
 'lg6671739d-3435-4ae6-9593-f149e3730bc3',
 'lg613d895f-2b10-43e6-a6bf-5cf3b0112510',
 'lg7f9ac389-cef7-4195-ab5b-8818ecdca575',
 'lg78fa3790-72b0-4430-a906-c2973abe4be6',
 'lgdfdca34a-bb17-47a0-9d95-5d8005da49f3',
 'lge784307c-0746-41c7-b7df-6d6ee1f55c74',
 'lg3eceac64-8d3d-49b0-8012-57d9414f8343',
 'lg3873fafc-2412-4d86-8e2c-d0e8e3ff21f3',
 'lgac0ae68f-871d-456f-be1f-d1d2b94b9823',
 'lg3d9842fb-c16e-4e06-a23d-5311a66f3ed1',
 'lg1059eaa4-d99f-4984-9460-8bb36503964d',
 'lg7bd42707-f1bd-42d6-8c15-2f0a41a69397',
 'lg1bdb2885-4e84-48fc-b7cc-9f87f1f97971',
 'lg70da2703-3c19-434d-a9b4-6104e59ef36c',
 'lg4dd0c1d0-4713-477d-8aae-55a61bce39e3',
 'lgdb2d96c4-2acc-47a0-b1f7-c7b67e1331b4',
 'lg005568cc-b926-4f99-8cd6-bb3eb34d8a93',
 'lg0307b265-c6a2-4652-ae98-596cbc7f0ed9',
 'lga30e07c1-572d-4ab3-b4f7-dbd09dd0fb36',
 'lgdbb756a3-dbc2-45d4-b621-66a9913c747b',
 'lgabfeb20a-7d5d-4dc2-b195-9d9a33183755',
 'lg363daefd-20a9-4424-86ce-1271a476d853',
 'lga1f15f59-1754-4c2b-8e15-10a3842381c8',
 'lg73c9cb6a-5533-4569-91e8-86af26f1acfd',
 'lg009e6db9-35b0-4e30-9509-2081fa8d8bb9',
 'lgccf53d22-73e7-41ab-8e9f-e7b088982d4d',
 'lg1f61552f-feb7-4956-a77c-6251fc85da14',
 'lgf1103c53-65b2-444e-9b64-50ed05917be7',
 'lg78d83360-8bbc-4d39-9a8c-63b2f8ccb2be',
 'lga4bbb6bd-b1a6-4521-9144-6ce85a3c6a78',
 'lgb84b1ba1-db9c-4282-a6d8-d4fe39344b40',
 'lgf388e313-49e4-4d81-9c1d-4ee42c4ea835',
 'lg70211a0a-ddb6-4039-a329-101cf4784ecf',
 'lg9d6f553b-a573-497d-8b8f-29f281a220af',
 'lg0ece8e8a-a92b-45ea-81c4-cb9ba96805a5',
 'lgd6691e91-27df-4ea2-8739-d944e8db9518',
 'lg8296b20c-0e14-480e-91c6-9953dc972ddd',
 'lgf08ebec5-a65e-43b4-a67b-b8c6678a9a20',
 'lg14d30ffe-48b4-4b6e-aa66-3df8290ad6a0',
 'lg90715539-faf5-44d4-90e6-c277d0a5f816',
 'lgb629763e-c733-4a8e-acdb-a3a8a9d0499a',
 'lgc0339c89-37f6-44ab-b2f8-48bbdac2539e',
 'lgd45cd856-bdc7-4ab8-bb86-5d536dd54de2',
 'lgd1d94048-ec92-4e99-86e5-267868caee6e',
 'lgfec9f25f-1311-4df0-a46a-74bca4e771dd',
 'lgedf3ff28-9e15-451d-9176-f70d1bda2af6',
 'lg4dd6b568-c976-43e8-91ae-c2b9c3410b75',
 'lg3accd5e5-b6fd-4927-a4ec-e021659e4e5a',
 'lg2c73b53e-afdf-4058-ac0a-8028f524ded3',
 'lga5c80589-75a5-47d7-b18f-72c2fb692105',
 'lg79cc40ce-b468-4cf7-94c1-3d0abde57e2b',
 'lg71208a90-23a2-4f66-ba3f-01800e0742be',
 'lgf1d37edf-cfa5-4d72-907d-2fdf29e420b3',
 'lgd1cc9e57-f61c-49e2-8b7c-945b55b14ab6',
 'lg5383600c-d9ab-4aa2-a2b7-075d01d0c3ca',
 'lg7ca476fe-9f99-440d-956c-f36a269bcd96',
 'lg511cc03c-b106-4faa-9586-dc6b360a4e8f',
 'lg3504023e-a45a-4cab-9581-d620978552e8',
 'lg203fb31d-059f-44f2-bf0f-369f00bd3979',
 'lgc3ae3d71-1a98-4c4c-bb10-8dde4895c483',
 'lg181431a1-f1b6-43c0-8eb9-28b9797d469f',
 'lgc06b9212-a5d8-4042-820c-cc4c9ef233bd',
 'lg32d141e3-ab71-436b-ba25-f1f3ec92d553',
 'lg9250a929-fed2-485e-817d-8f3956f2988c',
 'lg8ee3431b-c60a-49c0-a213-9c4d6d372185',
 'lg3a9f878d-b411-4934-a9ab-a41b00a2ae9c',
 'lg8207f0c3-be65-45ac-a11f-98c7d0a04d98',
 'lg01f0cbf9-d2cd-4a72-9385-1642b72ee9aa',
 'lg82566ee3-1dd6-46ab-8b24-ccbbc23eb871',
 'lg63ee684f-3214-41e9-b24a-f129978de4ce',
 'lgd968384a-0490-41b9-a0d9-2c956b32d44e',
 'lg14bd6ebf-ea96-429f-9aff-cdad36493093',
 'lg86bc6d07-bc36-40e4-976d-bc91d72272dd',
 'lgafc050eb-44a6-4817-bf3c-9fdca136bc84',
 'lgddde15f0-9886-4510-b16f-46675ad290dd',
 'lgd20dd0b7-cdf1-4121-9882-352787dd3ad4',
 'lgd8353ee2-2dd5-4522-806b-3a4d346c9244',
 'lgbebd0cae-f7d1-4675-91ee-74a2dae07165',
 'lg69a1d67e-bfd8-40ff-8a1d-361e0cdc2674',
 'lgcb257127-1223-4cd1-9d8e-b2a3d8b310ef',
 'lg4cda1806-b697-4e1c-92a4-57c7de6699a8',
 'lg60f4afaf-02e7-4938-ae12-bb4a452dfbaa',
 'lg0cd7b0af-313f-4e3f-91ee-a130fe3a1290',
 'lg42965352-1fe9-4f3b-a4b1-53831208948c',
 'lg1a0154a9-8d81-4803-90aa-909990406b5b',
 'lge53e47c2-c264-4eb4-a11a-169751d31403',
 'lgc881a249-f3e4-4f75-a651-57c556dabc09',
 'lg7f88ad1b-45f8-42cb-b511-0fbfc219c7bc',
 'lg19c3dc22-1aa5-4bc6-a171-9dcf77edfb7f',
 'lg229ac099-019b-4177-a4b4-5aca6b876165',
 'lg2c6bc87a-f30d-467d-9d58-f29d90a80dc0',
 'lge600495e-797a-4c4b-83cb-22da996e36c5',
 'lg89818094-83e5-4227-8aea-6c2367c70193',
 'lgbd773c5f-fee3-4e21-bfc7-83c4863d3162',
 'lg5e7c517a-da08-483b-998a-5c331457875c',
 'lg2dd3cf17-0521-4ea4-8d60-3f41799ab175',
 'lg038bc44d-f71d-46d4-9c24-903e039f771e',
 'lg3acdd829-0f26-4f1d-8ea0-b1ec7013af53',
 'lgdeb13489-38d0-46b5-8e6e-d3f8fbf984c4',
 'lga8f3508d-3aa0-46f9-898a-65bf05eb275d',
 'lg625536ad-47b6-40ee-a272-e0be0677a3f3',
 'lg6c276585-28fc-47bf-81fc-775522e53a4d',
 'lgd471b334-d96a-4604-abb6-80c660e31e3a',
 'lg6fd3d1c2-9bd1-47af-8045-10382c20411c',
 'lge21a282b-925a-4f05-86a2-f3a34b7a16b4',
 'lgf3a7846f-1375-4184-a85b-4b2dcb58e6ef',
 'lg0ed66e92-2f42-4c6b-a06e-1336b2078f1b',
 'lgfdf93d5a-1e15-4d0b-ad64-e2eb8559c6d2',
 'lg4120da72-ec7b-420e-94ba-01199a23a123',
 'lg8e537088-9f2b-4e97-ac58-fbc9a1269502',
 'lg2cb4504c-b8d4-4eb0-aab3-71479119a274',
 'lgadb3e7fb-d2dc-4e6b-9733-56b89f3ad476',
 'lg2176a4a7-90af-42e5-a5f4-19887b9cfc7b',
 'lg00b05423-297b-43cb-9336-8ea21a601c17',
 'lg326a0b20-f1db-4929-a0f9-178fd4f963db',
 'lg7c331888-6a16-4ed9-b380-c14063e76d2c',
 'lg823ab18c-2bfd-4a1f-b7f4-e1c591cb0405',
 'lg2ff68c62-b80a-4622-a5d2-fe0315205878',
 'lga0b8d06e-2fa6-4187-9032-365d13a8075c',
 'lgcb3ae87d-2428-403d-9da7-6d80554162da',
 'lg0fde1dda-ab76-4f90-8316-6f7b2dd66663',
 'lgda2e95fa-07ae-43c1-92f8-6a18973a2355',
 'lga75568b1-6aed-48d8-a566-7f998c096821',
 'lgc8a6a78d-d75b-42a7-a3d6-43bd480bcc5f',
 'lg636ba8f2-629c-40fc-bed1-d0666a0fb59f',
 'lgb165b5bb-d7fc-471b-a2f9-2e9e49c28316',
 'lgfcc35a3a-fe7e-4647-8d15-cf0119577808',
 'lg7994b905-5cb9-46ff-8d7d-c86b80a4ac5e',
 'lg68441ddb-cb2f-4385-bea4-1e56fe489001',
 'lg5ba381b8-f0f7-41da-b8f7-35a3470ce54f',
 'lg064f9199-6043-4760-811b-5e641028d412',
 'lg4cc1a740-c726-49df-959d-4371ad91b304',
 'lgf4bf9ea5-be13-4dad-99d9-ab9f1b670dc0',
 'lg089663dd-8c23-44df-9bd9-b059fa18a338',
 'lgf9174184-3270-4aa6-b03a-d6c5fb64819d',
 'lgd92e4828-d63f-4062-9650-bcd7b33449b8',
 'lg17e79a57-05e8-420f-a546-e943d9d0ddbe',
 'lg56090fec-6801-471b-a277-9dc3979637d0',
 'lgdd25efcc-f40b-4b3b-8cbb-b900f72a08a5',
 'lg86cf0988-a4ee-4b6a-b62a-0d61a2904626',
 'lg9d68da8a-5efb-40e7-bbfe-02ed95e629cf',
 'lg6c0a151c-0ba8-4ca5-b629-a0c86db6dc97',
 'lg3bd5575d-8bc4-4057-b4e8-3e2dda925ac3',
 'lg07a586ab-c64b-411a-8323-baee0d8ab948',
 'lg1121bafe-3788-4124-8751-554c59dd0fee',
 'lg3292328e-dde9-4b7e-97f9-d87546fabdb8',
 'lge2ea657e-c2d3-4032-b50d-f8a9d673ec7e',
 'lg897f1f50-33d7-49ec-bbd6-486f12ba5b40',
 'lg992737cf-2393-4b1f-9e45-68dafc16f65c',
 'lg4adee42d-2450-43db-9cbd-1b903cc80ab3',
 'lgb709aca4-bc94-46cd-816e-4233a3691974',
 'lge25f75aa-c55d-4206-b69b-04faf0453e82',
 'lg8653f165-0d1a-4f2c-ae83-5a94d88d9e82',
 'lg19442b6c-f005-424d-9e54-4fbf2b780c68',
 'lg20899214-e04d-4f70-9ac0-bc5e33e0bbbd',
 'lg6e14e24a-02f2-48e4-b45f-a0c057eade47',
 'lgb0839724-ed13-4fe1-b516-f83454767386',
 'lg123a270d-a42c-4c62-ab6e-135a952bba4f',
 'lga401aff9-154d-449a-8549-ed5c918beeba',
 'lg7d6c53ae-bb50-491b-982e-013999c93526',
 'lg173e75c6-d7f2-4b9d-aa2d-28497164eba4',
 'lg3e2b65df-fbf8-4f84-805f-ed03913a57eb',
 'lg2ece3080-e11c-4cce-98be-bc1804fe412d',
 'lg39807037-146d-42eb-b250-b5ed9aa373bd',
 'lg41fd19c0-f7eb-4140-9ba8-39e8f5fd7742',
 'lg6cefeace-f9bb-4dd7-9503-76974df866fa',
 'lg1a8d34a0-d4b1-4faa-a974-211647172d72',
 'lgab3ebe55-974e-41f9-8e00-7c6ea047776f',
 'lgaa5b862c-8bfe-48ac-b280-51d6cc429354',
 'lg1d8909fa-253c-4976-a44e-67c098bc63bd',
 'lg70b1e085-a0fc-4669-bacb-18585fe60b11',
 'lg007f86c8-efc6-418d-b66d-d04de4444002',
 'lga4f38048-c1d1-43e8-ae64-084c4c73fefa',
 'lgd02030db-8d9a-45f6-b419-a5cdba617c78',
 'lgc375b7fd-eed2-484e-b276-52b8262bfe56',
 'lga7fafca0-a9ec-4793-8240-2873c6123312',
 'lg996f5dd2-43c6-43fd-8006-efb06b7dc0c6',
 'lg4a61bcc1-9eda-44fc-8cd1-47fbc12c6167',
 'lg6ed865a6-bc8a-4d7b-bc8b-e8650644df6a',
 'lga6a27e26-64bd-4281-ad55-0ae814f09c40',
 'lg8f23f0e2-f795-4c5f-bf9c-53f9e70dec71',
 'lga779da45-e9f8-4331-a45f-0379273ca21a',
 'lgbc42c18d-f990-4f3f-88dd-b3400c25e710',
 'lg434686df-6f00-44e5-9682-1e86ad36c83d',
 'lga11fb246-09a0-42c9-b469-207f85e5fa4e',
 'lg7ebd7cc9-2e15-4080-9ec1-c56ae54484e7',
 'lgb000e9cb-48d1-4d33-acd4-51bf86f88e78',
 'lgdb7440b2-08cf-4221-84b3-5c7e3cfd00c5',
 'lg74840020-b4a2-4b22-a4da-a565da4d974c',
 'lgf4ee821a-4213-4934-b000-ef3870533b0e',
 'lg4a2c2d13-e676-472e-93f0-55cf2372714a',
 'lgd48d9468-afd2-4356-ab0d-c0a95da287d2',
 'lg0fd8661c-3f59-4d07-809f-67a97494fbb5',
 'lg2c58461c-5e7d-48d3-9c1a-fd97229301b9',
 'lg945b5725-7993-4dd7-a11d-4f5464f74353',
 'lg468fe0f2-b414-4655-a383-22f6537be774',
 'lg47672d3b-dbfb-429a-9f96-92cce5813b71',
 'lg48c933eb-3a45-4fae-842e-96c4e19d1b2d',
 'lg969e0836-5173-4f17-a480-fe4556c07c7f',
 'lg85d87fbd-faf3-44aa-8379-066cd6deb20f',
 'lgdd0059fa-0a7c-45d5-9a62-443c8d5a0529',
 'lg5cf771bf-f601-4433-8163-66c2b22c17ea',
 'lgf8d5d4de-801d-4168-8b83-b691f19618ae',
 'lgb3ac840e-1215-4f99-9ec6-b47deba54f8b',
 'lg04f0b469-8ffc-4619-a67b-25c2813ff649',
 'lg6c97e7bd-733c-44eb-a326-ec15b1425981',
 'lg5c255fde-96b2-4acb-9c11-98f5f4ad7e28',
 'lg5eeddada-8065-4671-bc34-9bb8f48aa14c',
 'lg80ab6451-28ee-4921-8167-f64895120ed8',
 'lgd951e157-7208-48c2-bc0e-4289ee6f6a93',
 'lg4f2062b3-251d-42d3-b0e4-75ae5b85b5a1',
 'lg8dcb53a1-f07b-450b-b433-ebe49a51f8e2',
 'lgc1cecef9-cb1d-42e8-924a-ea02241f4ef3',
 'lgecf819ee-43b7-47c7-8a48-80670ce82194',
 'lg3b732150-5035-440b-8da7-9f7949efba50',
 'lgb2184fc1-c484-4172-aaaa-57950ad73a55',
 'lgb37381dd-2867-4869-beda-16048b5545a5',
 'lg13e85303-7414-42f4-80c4-2f0b6b687703',
 'lg4c1b2b54-77c3-4856-8d03-b43b2f731609',
 'lg9ade3828-e37e-4a84-a858-aaeac1954dfd',
 'lgae699b37-51c1-41f9-849b-de6699de1e27',
 'lg1b323cff-8517-4442-8abc-ca02ac005819',
 'lg4d8d0299-099b-4da7-aad4-341e67b4a934',
 'lg9d9fcc11-a968-4aa3-869e-a5a4238b2933',
 'lg650dc2d4-1450-4e87-8e80-e714ae069378',
 'lgc7b04141-28a2-4d54-8290-3b94f5ff6c80',
 'lgd34ef86f-e660-4edd-9648-c17117579a26',
 'lg418c82fd-7725-4c25-b88e-fff8c1841eb4',
 'lgcc5c4bb2-5c41-48e8-8432-d8c1e402783c',
 'lg15c82393-298b-4ecc-9bb3-c49f89f87653',
 'lgb040de71-a4f7-44a9-b543-6c34af11a3b8',
 'lge86fe3e0-8c5f-4f9e-923e-74642eccde13',
 'lg0061a8b1-e1db-402b-9a3d-481149c4f920',
 'lg2d9855f6-03c6-49a7-863c-968a306a8286'];
var dbNameLocal = 'alice';

var deleteFilter = function (db, filter_name, rev_id, callback) {
    console.log('deleting filter');
    couchLG.del(db, filter_name, rev_id).then(function (result) {
        console.log(i, ': ', result);
        return callback('success');
    }).catch(function (info) {
        console.log(i, ' - Error: ', info);
        return callback('error');
    })
}

var deleteUserDocs = function () {
    var indexDoc = {
        "_id": "_design/my_del_index",
        "views": {
            "by_name": {
              "map": "function (doc) { "+
              "if(doc._id.indexOf('user_') !== -1) {"+
                    "emit(doc._id, doc._rev);"+
                "} }"
            }
        }
    }

    var deleteDoc = function (db, doc_id, rev_id, i) {
        couchLG.del(db, doc_id, rev_id).then(function (result) {
            console.log(i, ': ', result);
        }).catch(function (info) {
            console.log(i, ' - Error: ', info, doc_id);
        })
    }

    var loop = function (j) {
        if(j<dbName.length) {
            console.log(j);
            // couchLG.get(dbName[j], '_design/my_del_index').then(function (result) {
            //     console.log(result);
            //     deleteFilter(dbName[j], '_design/my_del_index', result.data._rev, function (str) {
            //         console.log(str, ': ', j);
            //         j++;
            //         loop(j);
            //     });
            // }).catch(function (info) {
            //     console.log('Error: ', info);
            //     j++;
            //     loop(j);
            // });
            couchLG.insert(dbName[j], indexDoc).then(function (result) {
                couchLG.get(dbName[j], '_design/my_del_index/_view/by_name').then(function (result) {
                    for(var i=0; i<result.data.rows.length; i++) {
                        deleteDoc(dbName[j], result.data.rows[i].id, result.data.rows[i].value, i);
                    }
                    j++;
                    loop(j);
                }).catch(function (info) {
                    console.log('Error: ', info);
                    j++;
                    loop(j);
                });
            }).catch(function (info) {
                console.log('Error in insert: ', info);
                couchLG.get(dbName[j], '_design/my_del_index/_view/by_name').then(function (result) {
                    for(var i=0; i<result.data.rows.length; i++) {
                        deleteDoc(dbName[j], result.data.rows[i].id, result.data.rows[i].value, i);
                        // console.log(result.data.rows[0]);
                        j++;
                        loop(j);
                    }
                }).catch(function (info) {
                    console.log('Error: ', info);
                    j++;
                    loop(j);
                });
            });
        }
    }
    loop(0);
}

var removeAuthFilter = function () {
    var loop = function (j) {
        if(j < dbName.length) {        
            couchLG.get(dbName[j], '_design/auth').then(function (result) {
                console.log(dbName[j], result);
                deleteFilter(dbName[j], '_design/auth', result.data._rev, function (str) {
                    console.log(str, ': ', j);
                });
                    j++;
                    loop(j);
            }).catch(function (info) {
                console.log(dbName[j],' Error: ', info);
                j++;
                loop(j);
            });
        }
    }
    loop(0);
}

var addAuthFilter = function () {
    var rejectedDB = [];
    var auth = {
        "_id": "_design/auth",
        "validate_doc_update": "function(newDoc, oldDoc, userCtx) {   if (userCtx.roles.indexOf('_admin') !== -1) {     return;   } else {     throw({forbidden: 'This DB is read-only'});   }   }",
        "language": "javascript"
    }
    var loop = function (j, callback) {
        if (j < dbName.length) {
            couchLG.get(dbName[j], '_design/auth').then(function (result) {
                console.log(j, ' ================================have already==========================');
                j++;
                if (j === dbName.length) {
                    return callback();
                }
                loop(j, callback);                
            }).catch(function (info) {
                couchLG.insert(dbName[j], auth).then(function (result) {
                    console.log('INSERT: ', j, dbName[j]);
                    j++;
                    if (j === dbName.length) {
                        return callback();
                    }
                    loop(j, callback);
                }).catch(function (info) {
                    console.log(j, ' - Error: ', info);
                    rejectedDB.push(dbName[j]);
                    console.log(j);
                    j++;
                    if (j === dbName.length) {
                        return callback();
                    }
                    loop(j, callback);
                });
            });
        }
    }

    var nested = function (i) {
        if (i < 3) {
            loop(0, function () {
                console.log('<<<<<<<<<<<<<<< ', rejectedDB.length, ' >>>>>>>>>>>>>>>>');
                dbName = rejectedDB;
                if (i === 2) {
                    console.log('rejectedDBs: ', dbName);
                }
                rejectedDB = [];
                i++;
                nested(i);
            });
        }
    }
    nested(0);
}();

var addSUandCTC = function () {
    var rejectedDB = [];
    var su = {
        "map": "function(doc){ if (doc.units || doc.chapters){ emit(doc._id, doc)}}"
    };
    var ctc = {
        "map": "function(doc){ if ( doc.topics || doc.contents || doc.interactions ){ emit(doc._id, doc)}}"
    };
    var loop = function (j, callback) {
        if(j < dbName.length) {        
            couchLG.get(dbName[j], '_design/filters').then(function (result) {
                if(!result.data.views.hasOwnProperty('su')) {
                    result.data.views.su = su;
                    result.data.views.ctc = ctc;            
                    couchLG.update(dbName[j], result.data).then(function (res) {
                        console.log(j,': ', dbName[j]);
                    })
                } else {
                    console.log(j,' ================================have already==========================');
                }
                j++;
                if(j === dbName.length) {
                    return callback();
                }
                loop(j, callback);
            }).catch(function (info) {
                console.log(j+96,' - Error: ', info);
                rejectedDB.push(dbName[j]);
                j++;
                if(j === dbName.length) {
                    return callback();
                }
                loop(j, callback);
            });
        }
    }

    var nested = function (i) {
        if(i < 3) {
            loop(0, function () {
                console.log('<<<<<<<<<<<<<<< ', rejectedDB.length, ' >>>>>>>>>>>>>>>>');
                dbName = rejectedDB;
                if(i === 2) {
                    console.log('rejectedDBs: ', dbName);
                }
                rejectedDB = [];
                i++;
                nested(i);
            });
        }
    }
    nested(0);
};

var addInteractions = function () {
    var rejectedDB = [];
    var interactions = {
        "map": "function(doc){ if ( doc._id.indexOf('interaction') !== -1 ){ emit(doc._id)}}"
    };
    var loop = function (j, callback) {
        if(j < dbName.length) {        
            couchLG.get(dbName[j], '_design/filters').then(function (result) {
                if(!result.data.views.hasOwnProperty('interactions')) {
                    result.data.views.interactions = interactions;
                    couchLG.update(dbName[j], result.data).then(function (res) {
                        console.log(j,': ', dbName[j]);
                    })
                } else {
                    console.log(j,' ================================have already==========================');
                }
                j++;
                if(j === dbName.length) {
                    return callback();
                }
                loop(j, callback);
            }).catch(function (info) {
                console.log(j+96,' - Error: ', info);
                rejectedDB.push(dbName[j]);
                j++;
                if(j === dbName.length) {
                    return callback();
                }
                loop(j, callback);
            });
        }
    }

    var nested = function (i) {
        if(i < 3) {
            loop(0, function () {
                console.log('<<<<<<<<<<<<<<< ', rejectedDB.length, ' >>>>>>>>>>>>>>>>');
                dbName = rejectedDB;
                if(i === 2) {
                    console.log('rejectedDBs: ', dbName);
                }
                rejectedDB = [];
                i++;
                nested(i);
            });
        }
    }
    nested(0);
}

var loop = function (i) {
    if(i<dbName.length) {
        couchLG.get(dbName[i], 'preferences').then(function (result) {
            var rev = result.data._rev;
            preferences._rev = rev;
            couchLG.update(dbName[i], preferences).then(function (result) {
                console.log(i, dbName[i], result);
                i++;
                if(i === dbName.length) {
                    console.log('full finish');
                }
                loop(i);
            })
        }, function (msg) {
            if(msg.code === 'EDOCMISSING') {
                couchLG.insert(dbName[i], preferences).then(function (result) {
                    console.log('INSERT: ', i, dbName[i], result);
                    i++;
                    if(i === dbName.length) {
                        console.log('full finish');
                    }
                    loop(i);
                }, function (err) {
                    console.log('ERR: ', i, dbName[i], msg);
                    return;
                })
            } else {
                console.log(msg);
            }
        });
    }
    // couchLG.insert(dbName[i], filter_readOnly).then(function (result) {
    //     console.log(result.data);
    // }, function (msg) {
    //     console.log('err: ', msg);
    // })
}

// loop(process.argv[2]);

// couchLocal.get(dbNameLocal, '_security').then(function (result) {
//     console.log(result.data);
//     var doc = result.data;
//     doc.admins.roles.push('admin');
//     // doc._id = '_security';
//     couchLocal.update(dbNameLocal.resource, doc).then(function (result) {
//         console.log(result);
//     }, function (msg) {
//         console.log('update err: ', msg);
//     });
// }, function (msg) {
//     console.log('err: ', msg);
// })

