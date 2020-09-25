// 判断ip是否冲突,一个ip端是否在另一个ip端内
function in_range(ip, cidr) {
  if (ip === cidr) {
    return true;
  }
  if (ip.indexOf("/") > 0 && cidr.indexOf("/") > 0) {
    return false;
  }
  const ip_seps = ip.split(".");
  const cidr_seps = cidr.split(".");
  // console.log(5);
  let addr = parseInt(ip_seps[0], 10) << 24;
  addr |= parseInt(ip_seps[1], 10) << 16;
  addr |= parseInt(ip_seps[2], 10) << 8;
  addr |= parseInt(ip_seps[3], 10);
  console.log(cidr_seps);
  const cidr_d_seps = cidr_seps[3].split("/");

  let mask = 0;
  let prefix = 32;
  if (cidr_d_seps.length > 1) {
    prefix = cidr_d_seps[1];
  }
  for (let i = 0; i < prefix; i++) {
    mask += 1 << (31 - i);
  }
  let netAddr = parseInt(cidr_seps[0], 10) << 24;
  netAddr |= parseInt(cidr_seps[1], 10) << 16;
  netAddr |= parseInt(cidr_seps[2], 10) << 8;
  netAddr |= parseInt(cidr_d_seps[0], 10);

  const lower = netAddr & mask;
  const upper = lower | ~mask;
  if (lower <= addr && addr <= upper) {
    return true;
  }
  return false;
}