const doctorsData = [
  {
    name: 'Samia Mekame',
    speciality: 'OPHTALMOLOGIST',
  },
  {
    name: 'Catherine Bedoy',
    speciality: 'PSYCHOLOGIST',
  },
];

const colors = ["#FF5733", "#33FF57", "#3357FF"]

const isValidateHex = (hex: string) => {
  const hexRegex = /^#([A-Fa-f0-9]{6}|[A-Fa-f0-9]{3})$/;
  return hexRegex.test(hex);
}

const isNumber = (value: any) => { return typeof value === 'number' && isFinite(value); }

export const resolvers = {
  Query: {
    doctors: (parent, args, context, info) => {
      if (!args.specialities) {
        return doctorsData;
      }
      return doctorsData.filter(doctor => args.specialities.includes(doctor.speciality));
    },
    add: (parent, args, context, info) => {
      if(!isNumber(args.number1) || !isNumber(args.number2)) {
        throw new Error('Invalid number');
      }
      return args.number1 + args.number2
    },
    subtract: (parent, args, context, infparent, info) => {
      if(!isNumber(args.number1) || !isNumber(args.number2)) {
        throw new Error('Invalid number');
      }
      return args.number1 - args.number2
    },
    multiply: (parent, args, context, info) => {
      if(!isNumber(args.number1) || !isNumber(args.number2)) {
        throw new Error('Invalid number');
      }
      return args.number1 * args.number2
    },
    divide: (parent, args, context, info) => {
      if (args.number2 === 0) {
        throw new Error('Division by zero');
      }
      if(!isNumber(args.number1) || !isNumber(args.number2)) {
        throw new Error('Invalid number');
      }
      return args.number1 / args.number2;
    },
    closestColor: (parent, args, context, info) => {
      const hex:string = args.hex;
      if (!isValidateHex(hex)) {
        throw new Error('Invalid hex color');
      }
      return colors.reduce((closest: string, current: string): string => {
        const distance = Math.abs(parseInt(hex.replace('#', ''), 16) - parseInt(current.replace('#', ''), 16));
        return distance < Math.abs(parseInt(hex.replace('#', ''), 16) - parseInt(closest.replace('#', ''), 16)) ? current : closest;
      }, colors[0])
    }
  },
};
