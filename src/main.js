import { createApp } from 'vue'
import App from './App.vue'
import Antd from 'ant-design-vue';

import {
    FileImageOutlined,
    UploadOutlined,
    PlusOutlined,
    BarsOutlined,
    DeleteOutlined,
    DragOutlined,
  } from '@ant-design/icons-vue';


import router from './router'
import store from './store'

const app = createApp(App);

app.use(router);
app.use(Antd);
app.use(store);

app.component('FileImageOutlined', FileImageOutlined);
app.component('UploadOutlined', UploadOutlined);
app.component('PlusOutlined', PlusOutlined);
app.component('BarsOutlined', BarsOutlined);
app.component('DeleteOutlined', DeleteOutlined);
app.component('DragOutlined', DragOutlined);

app.mount('#app');
