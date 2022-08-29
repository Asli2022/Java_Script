// Arrays are list that contain string or number. 

// Arrays of string

const AWS_Services  = [ "AWS","VPC", "EC2", "ECS", "S3", "IAM", "CloudTrail", "Cloud9", "Codecommit", "EBS", "EFS", "ALB", "NLB", "NACLS" ]
console.log (AWS_Services);
console.log(AWS_Services[AWS_Services.length-1]);
console.log(AWS_Services[3])



// Arrays of numbers

const num = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15 ];
console.log (num);
num.push (28)
console.log (num);
console.log(num[num.length-1]);

// Arrays of mixed data types

var data_types = [ "Fred", 22, "Linda", 40, "Abdi", 28, "Fatima", 25, "Sabrina", 25, "Farah", 21, "Dave" , 22 ];
console.log (data_types);
console.log(data_types.length);