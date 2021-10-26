import {request} from "@/network/request";

export function  getHomeMutiddta() {
  return request({
    url: '/home/multidata',
  })
}
