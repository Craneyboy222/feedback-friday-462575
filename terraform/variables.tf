variable "region" {
  description = "The AWS region to deploy to"
  default     = "us-west-2"
}

variable "ami" {
  description = "The AMI ID to use for the instance"
}

variable "instance_type" {
  description = "The EC2 instance type"
  default     = "t2.micro"
}