# Pydantic Reference

Source:
* [pydantic-docs](https://pydantic-docs.helpmanual.io/)

#### Table of contents

* [Models](#models)
    * [Properties](#properties)
    * [Error Handling](#error-handling)
* [Field Types](#field-types)


&nbsp;
# Models
* classes which inherit from `BaseModel`
* can be seen as similar to:
    * types in a strictly typed language
    * requirements of a single API endpoint
* makes use of python type annotations `name: type`
* can declare default value `name = 'John Doe'`
    * type is inferred from default value

``` python
from pydantic import BaseModel

class User(BaseModel):
    id: int
    name = 'Jane Doe'

user = User()
    # pydantic.error_wrappers.ValidationError: 1 validation error for User

user1 = User(id=1)
user1.dict()
    # {'id': 1, 'name': 'Jane Doe'}

user2 = User(id='12345')
user2.dict()
    # {'id': 12345, 'name': 'Jane Doe'}

class UserBase(BaseModel):
    users: List[User]
```

## Properties
|Property|Description|Example|
|--------|-----------|-------|
|`dict()`|Dictionary representation of model|
|`json()`|JSON representation of dict()|
|`copy()`|Deep copy of the model|
|`parse_obj()`|Load any object into model with error if not a `dict`|
|`parse_raw()`|Load a raw representation of string into model|
|`parse_file()`|Load files into a model|
|`parse_orm()`|loads data into model from a class|
|`schema()`|JSON schema of the model as a `dict`|
|`schema_json()`|JSON schema of the model as `json`|
|`construct()`|Create models without running validation|
|`__fields_set__`|`set` of names of fields that where set during model initialization|
|`__fields__`|A `dict` of models fields|
|`__config__`|The model's configuration class|


## Error Handling
* errors during validation can be caught as `ValidationError`
* `ValidationError` contains a list of errors that where caught
* `ValidationError` has the following properties
    |Property|Description|
    |--------|-----------|
    |`e.errors()`|Returns list of errors|
    |`e.json()`|Returns JSON representation of errors|
    |`str(e)`|Returns human readable representation of the errors|
* each error contains the following properties:
    |Property|Description|
    |--------|-----------|
    |`loc`|Error location as list|
    |`type`|A computer-readable identifier of the type|
    |`msg`|A human-readable identifier of the type|
    |`ctx`|Object which contains values required to render the error message|


&nbsp;
# Field Types
* `pydantic` uses both built-in Python types and implements its own commonly used types
* `pydantic` specific types are in the `typing` module



