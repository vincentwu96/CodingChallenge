export function compare_service_req_description(a,b) {
  if (a.service_req_description < b.service_req_description)
    return -1;
  if (a.service_req_description > b.service_req_description)
    return 1;
  return 0;
}

export function compare_sr_type(a,b) {
  if (a.sr_type < b.sr_type)
    return -1;
  if (a.sr_type > b.sr_type)
    return 1;
  return 0;
}

export function deep_copy(o) {
   var output, v, key;
   output = Array.isArray(o) ? [] : {};
   for (key in o) {
       v = o[key];
       output[key] = (typeof v === "object") ? deep_copy(v) : v;
   }
   return output;
}
/*
export function CompareNumbers(a, b){
  let comparison = 0;
  if(a>b){
    comparison = 1;
  }else if(b>a){
    comparison = -1;
  }
  return comparison;
}*/
