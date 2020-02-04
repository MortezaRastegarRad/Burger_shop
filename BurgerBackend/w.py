import requests

print(requests.post('http://localhost:8000/set_order/', {"ingredients": 10,
                                                         "price": 0,
                                                         "customer": {
                                                             "name": 'morteza',
                                                             "address": {
                                                                 "street": 'street 1',
                                                                 "zipcode": '2123123',
                                                             },
                                                             "email": "mori.rad98@gmail.com"
                                                         }}).json())
