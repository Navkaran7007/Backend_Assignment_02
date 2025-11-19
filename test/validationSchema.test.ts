import {createEmployeeSchema,
  updateEmployeeSchema,
  idParamSchema,
} from "../src/api/v1/validation/employeeSchemas";

import {
  createBranchSchema,
  updateBranchSchema
} from "../src/api/v1/validation/branchSchemas";

describe("createEmployeeSchema", () => {
  it("accepts a valid and rejects invalid one", () => {
    const valid = { name: "Nav", position: "Engineer", email: "Nav@ex.com", branchId: 1 };
    const invalid = { name: "A", position: "", email: "nope" };

    const ok = createEmployeeSchema.validate(valid);
    const bad = createEmployeeSchema.validate(invalid);

    expect(ok.error).toBeUndefined();
    expect(bad.error).toBeDefined();
  });
});

describe("updateEmployeeSchema", () => {
  it("requires at least one updatable field", () => {
    const none = {};
    const Obj = { position: "IT Manager" };

    const empty = updateEmployeeSchema.validate(none);
    const object = updateEmployeeSchema.validate(Obj);

    expect(empty.error).toBeDefined();
    expect(object.error).toBeUndefined();
  });
});

describe("idParamSchema", () => {
  it("accepts positive integer id", () => {
    const ok = idParamSchema.validate({ id: 5 });
    const bad = idParamSchema.validate({ id: "Nav" });

    expect(ok.error).toBeUndefined();
    expect(bad.error).toBeDefined();
  });
});

describe("createBranchSchema", () => {
  it("accepts a valid branch and rejects an invalid one", () => {
    const valid = { name: "Navi", address: "123 Main St", phone: "204-999-1234" };
    const invalid = { name: "", address: "", phone: "Nav" };

    const ok = createBranchSchema.validate(valid);
    const bad = createBranchSchema.validate(invalid);

    expect(ok.error).toBeUndefined();
    expect(bad.error).toBeDefined();
  });
});

describe("updateBranchSchema", () => {
  it("requires at least one updatable field", () => {
    const none = {};
    const some = { address: "GT Road" };

    const empty = updateBranchSchema.validate(none);
    const filled = updateBranchSchema.validate(some);

    expect(empty.error).toBeDefined();
    expect(filled.error).toBeUndefined();
  });
});

describe("idParamSchema", () => {
  it("accepts only positive numeric id", () => {
    const ok = idParamSchema.validate({ id: 10 });
    const bad = idParamSchema.validate({ id: "abc" });

    expect(ok.error).toBeUndefined();
    expect(bad.error).toBeDefined();
  });
});
