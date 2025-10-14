import {createEmployeeSchema,
  updateEmployeeSchema,
  idParamSchema,
} from "../src/api/v1/validation/employeeSchemas";

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
