
import WorkbaseONE from "../src/main";
import { expect } from 'chai';


it('resolves', (done) => {
    const workbaseClinet = new WorkbaseONE({ 
        token: 'eyJhbGciOiJSUzI1NiIsImtpZCI6IjEiLCJ0eXAiOiJKV1QifQ.eyJyb2xlcyI6W10sImV4cCI6MjI3MzkyODI2NSwiaWF0IjoxNjY5MTI4MjY1LCJzdWIiOiIzY2YxNzI2Ni0zNDczLTQwMDYtOTg0Zi05MzI1MTIyNjc4YjcifQ.TwJ1-HqpNHPAEndQNltgHvDIroVXF2C2MZ_hhDAVFGLZBH02lq7V0077phVHx6ZUiWQSHsd0RWu4lLgm_HrKDKVMoP7M4vdXGrM3CrWuHhaG9QLbzGs1yA1uhDFo23BlBA8iClJXntEU0eCJccMtBb-rhJBFU5T9zAOCtU3EWszg1Boo6JxLs5iw1q6UB-STRvI7WwqOdpq3CgJm5DS2Npp9MwUDXwufIGmY5dhVzduo8mKGf9jOZ6JjgLOItkSr37Gf_S2LVt_-xVUbbyy1rS2uXd81F6NaPWN8ML33AxAvjBu0Bs19eErVXDr7f3JRggb-2cTQuAI7A3oK4gAkEA',
    });
    workbaseClinet.publish({
        block: "activities",
        name: "User signed in",
        tags: ["email:bruce@alumina.com"]
    }).then((res) => {
        expect(res).equal(true);
        done();
    }).catch(done);
 });



