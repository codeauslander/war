const assertEquals = require('assert');

function validatePIN (pin) {
  if (!/^\d*[0-9]\d*$/.test(pin) || (pin.length !== 4 && pin.length !== 6)) return false;
  return true;
}

function validatePIN_V2(pin) {
  return /^(\d{4}|\d{6})$/.test(pin)
}


describe("validatePIN", function() {
  it("should return False for pins with length other than 4 or 6", function() {
    assertEquals(validatePIN("1"),false, "Wrong output for '1'")
    assertEquals(validatePIN("12"),false, "Wrong output for '12'")
    assertEquals(validatePIN("123"),false, "Wrong output for '123'")
    assertEquals(validatePIN("12345"),false, "Wrong output for '12345'")
    assertEquals(validatePIN("1234567"),false, "Wrong output for '1234567'")
    assertEquals(validatePIN("-1234"),false, "Wrong output for '-1234'")
    assertEquals(validatePIN("1.234"),false, "Wrong output for '1.234'")
    assertEquals(validatePIN("-1.234"),false, "Wrong output for '-1.234'")
    assertEquals(validatePIN("00000000"),false, "Wrong output for '00000000'")
  });
});
