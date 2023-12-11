# QRED Javascript Backend Developer - Case study

Hi! This is my take on the case study!

To run the project you need to have [Docker](https://docker.com) installed.

Next, run `docker-compose up`

---
- Backend: `http://localhost:9090`
- Database (pg): `http://localhost:5432` (Connect with credentials found in `/db/localdb.env`)


---
## Specifics
### Backend:
- Please see database schema in /db/init.sql 
- Please import and use the postman collection /qred.postman_collection.json found in root to acess the available endpoints!

### Nice to haves/missing features
- Two apis instead of one (one internal and one frontend-facing api)
- Proper auth middleware (OAuth) with guards
- Better input validation in endpoints (class-validator package)
- More unit tests written. Currently I only wrote a test for the company controller
- Custom logger (winston?)
- Pagination of payload response
- Util function to convert amounts/values (which are in minor units) to correct format.
- Proper mapper to map dto to entity etc..
- SQL-injection?
- Card numbers and other sensitive data should be encrypted and not sensitive info censored.
- Extract types (request/response dtos) and other common functionality in packages (devkit) to be able to share with frontend.
- Some type of caching 


