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
export const resolvers = {
    Query: {
        doctors: (parent, args, context, info) => {
            if (!args.specialities) {
                return doctorsData;
            }
            return doctorsData.filter(doctor => args.specialities.includes(doctor.speciality));
        },
    },
};
