# workbaseone.js

WorkbaseONE JS library to send the event streams from your client application

<img src="https://relay-public-images.s3.amazonaws.com/mail3.png" alt="WorkbaseONE"/>

## pre requisite

- An account in WorkbaseONE (Go to: https://success.workbaseone.com)
- Atleast one event block (Go to: settings -> apps -> your app -> event block)
- API token (Go to: settings -> apps -> your app -> event block -> token)

## installation

```npm i workbaseone --save```

## import

```import { WorkbaseONE } from 'workbaseone'```

## init

```
    const workbaseClient = new WorkbaseONE({ 
         token: '<YOUR API TOKEN>',
    });
```

## usage

```
    workbaseClient.publish({
        "block": "daily_active_users",
        "identifier": "matt@randcorp.com",
        "properties": {
            "name": "Item added to cart",
            "description": "Matt added cake to the cart",
            "icon": "🍰",
        },
    });
```

## what's next?

You can view the events populated under the identifier. Learn more about automation and analytics in the WorkbaseONE documentation.


