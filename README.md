# upload-progress-controller

## Project setup

```
npm install
```

### Compiles and hot-reloads for development

```
npm run serve
```

### Compiles and minifies for production

```
npm run build
```

## Document

### Kowaii Uploader

---

#### Attrbute

1. URL  
   **Type:** string  
   **Default:** ---  
   **required:** true  
   **Description:** The URL to which the file will be uploaded.

```
<kowaii-uploader url="https://www.***.com/upload"></kowaii-uploader>
```

2. beforeUpload  
   **Type:** function(file)  
   **Default:** ---  
   **required:** false  
   **Description:** A function that is called before the file is uploaded. If the function returns false or a rejected
   Promise, the file will not be uploaded.

```
<kowaii-uploader :before-upload="beforeUpload"></kowaii-uploader>

...

methods: {
  beforeUpload(file) {
    console.log(file);
    return true;
  }
}
```

3. accept  
   **Type:** string  
   **Default:** ---
   **required:** false  
   **Description:** The file type that can be uploaded. The value is the same as the accept attribute of the input
   element.

```
<kowaii-uploader accept=".jpg,.jepg"></kowaii-uploader>
```

4. disabled  
   **Type:** boolean  
   **Default:** false  
   **required:** false  
   **Description:** Whether the upload button is disabled.

```
```

5. requestHeaders  
   **Type:** object  
   **Default:** ---  
   **required:** false  
   **Description:** The request header of the file upload.

```
<kowaii-uploader :request-headers="requestHeaders"></kowaii-uploader>

...

data() {
  return {
    requestHeaders: {
      Content-Type: 'multipart/form-data',
      Authorization: 'Bearer ***'
    }
  }
}
```

6. requestData  
   **Type:** function(file)  
   **Default:** ---  
   **required:** false  
   **Description:** A function that returns the data to be uploaded. The function receives the file as a parameter.

```
<kowaii-uploader :request-data="requestData"></kowaii-uploader>

...

methods: {
  requestData(file) {
    let formData = new FormData();
    formData.append('file', file);
    formData.append('name', file.name);
    return formData;
  }
}
```

---

#### Slot

**name:** uploader-btn  
**required:** false  
**Description:** The content of the upload button.

```
<kowaii-uploader>
  <div slot="uploader-btn">
    <button>Upload</button>
  </div>
</kowaii-uploader>
```

---

#### Event

1. success  
   **Parameters:** result data
   **Description:** The event that is triggered when the file is successfully uploaded.

```
<kowaii-uploader @success="success"></kowaii-uploader>

...

methods: {
  success(data) {
    console.log(data);
  }
}
```

2. error  
   **Parameters:** error message
   **Description:** The event that is triggered when the file upload fails.

```
