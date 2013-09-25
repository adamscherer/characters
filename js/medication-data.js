+function (context) { "use strict";

    context.MedicationData = {};

    MedicationData.ibuprofen = [
        {
            min: 11, 
            max: 16, 
            milligram: 50,
            advil: '2/3 syringe (1.25ml)',
            children: '½ tsp (2.5ml)',
            chewable: 'N/A',
            junior: 'N/A'
        },
        {
            min: 17, 
            max: 21, 
            milligram: 75,
            advil: '1 syringe (1.875ml)',
            children: '¾ tsp (3.75ml)',
            chewable: 'N/A',
            junior: 'N/A'
        },
        {
            min: 22, 
            max: 26, 
            milligram: 100,
            advil: '1 1/3 syringe (1.875ml + 0.625ml)',
            children: '1 tsp (5ml)',
            chewable: '2 tablets',
            junior: '1 tablet'
        },
        {
            min: 27, 
            max: 32, 
            milligram: 125,
            advil: '1 2/3 syringe (1.875ml + 01.25ml)',
            children: '1 ¼ tsp (6.25ml)',
            chewable: '2 ½ tablets',
            junior: '1 tablet'
        },
        {
            min: 33, 
            max: 37, 
            milligram: 150,
            advil: '2 syringes (2 x 1.875ml)',
            children: '1 ½ tsp (7.5ml)',
            chewable: '3 tablets',
            junior: '1 ½ tablet'
        },
        {
            min: 38, 
            max: 42, 
            milligram: 175,
            advil: '2 1/3 syringes (2 x 1.875ml + 0.625ml)',
            children: '1 ¾ tsp (8.75ml)',
            chewable: '3 ½ tablets',
            junior: '1 ½ tablet'
        },
        {
            min: 43, 
            max: 53, 
            milligram: 200,
            advil: '2 2/3 syringes (2 x 1.875ml + 1.25ml)',
            children: '2 tsp (10ml)',
            chewable: '4 tablets',
            junior: '2 tablets'
        },
        {
            min: 54, 
            max: 64, 
            milligram: 250,
            advil: 'Use liquid or tablets',
            children: '2 ½ tsp (12.5ml)',
            chewable: '5 tablets',
            junior: '2 ½ tablets'
        },
        {
            min: 65, 
            max: 75, 
            milligram: 300,
            advil: 'Use liquid or tablets',
            children: '3 tsp (15ml)',
            chewable: '6 tablets',
            junior: '3 tablets'
        },
        {
            min: 76, 
            max: 86, 
            milligram: 350,
            advil: 'Use liquid or tablets',
            children: '3 ½ tsp (17.5ml)',
            chewable: '7 tablets',
            junior: '3 ½ tablets'
        },
        {
            min: 87, 
            max: 95, 
            milligram: 400,
            advil: 'Use liquid or tablets',
            children: '4 tsp (20ml)',
            chewable: '8 tablets',
            junior: '4 tablets'
        },
        {
            min: 96, 
            max: 1600, 
            milligram: 0,
            advil: 'Use Adult Dose',
            children: 'Use Adult Dose',
            chewable: 'Use Adult Dose',
            junior: 'Use Adult Dose'
        }
    ];

    MedicationData.acetaminophen = [
        {
            min: 5, 
            max: 8, 
            milligram: 40,
            children: '1/4 tsp (1.25ml)',
            chewable: 'N/A',
            junior: 'N/A'
        },
        {
            min: 9, 
            max: 10, 
            milligram: 60,
            children: '1/3 tsp (1.8ml)',
            chewable: 'N/A',
            junior: 'N/A'
        },
        {
            min: 11, 
            max: 16, 
            milligram: 80,
            children: '1/2 tsp (2.5ml)',
            chewable: 'N/A',
            junior: 'N/A'
        },
        {
            min: 17, 
            max: 21, 
            milligram: 120,
            children: '3/4 tsp (3.75ml)',
            chewable: 'N/A',
            junior: 'N/A'
        },
        {
            min: 22, 
            max: 26, 
            milligram: 160,
            children: '1 tsp (5ml)',
            chewable: '2 tablets',
            junior: '1 tablet'
        },
        {
            min: 27, 
            max: 32, 
            milligram: 200,
            children: '1 1/4 tsp (6.25ml)',
            chewable: '2 1/2 tablets',
            junior: '1 tablet'
        },
        {
            min: 33, 
            max: 37, 
            milligram: 240,
            children: '1 1/2 tsp (7.5ml)',
            chewable: '3 tablets',
            junior: '1 1/2 tablet'
        },
        {
            min: 38, 
            max: 42, 
            milligram: 280,
            children: '1 3/4 tsp (8.75ml)',
            chewable: '3 1/2 tablets',
            junior: '1 1/2 tablet'
        },
        {
            min: 43, 
            max: 53, 
            milligram: 320,
            children: '2 tsp (10ml)',
            chewable: '4 tablets',
            junior: '2 tablets'
        },
        {
            min: 54, 
            max: 64, 
            milligram: 400,
            children: '2 1/2 tsp(12.5ml)',
            chewable: '5 tablets',
            junior: '2 1/2 tablets'
        },
        {
            min: 65, 
            max: 75, 
            milligram: 480,
            children: '3 tsp (15ml)',
            chewable: '6 tablets',
            junior: '3 tablets'
        },
        {
            min: 76, 
            max: 86, 
            milligram: 560,
            children: '3 1/2 tsp (17.5ml)',
            chewable: '7 tablets',
            junior: '3 1/2 tablets'
        },
        {
            min: 87, 
            max: 95, 
            milligram: 640,
            children: '4 tsp (20ml)',
            chewable: '8 tablets',
            junior: '4 tablets'
        },
        {
            min: 96, 
            max: 1600, 
            milligram: 0,
            children: 'Use Adult Dose',
            chewable: 'Use Adult Dose',
            junior: 'Use Adult Dose'
        }
    ];

    MedicationData.diphenhydramine = [
        {
            min: 11, 
            max: 16, 
            milligram: 6.25,
            children: '1/2 tsp (2.5ml)',
            chewable: 'N/A',
            capsule: 'N/A'
        },
        {
            min: 17, 
            max: 21, 
            milligram: 9.375,
            children: '3/4 tsp (3.75ml)',
            chewable: 'N/A',
            capsule: 'N/A'
        },
        {
            min: 22, 
            max: 27, 
            milligram: 12.5,
            children: '1 tsp (5ml)',
            chewable: '1 tablet or strip',
            capsule: 'N/A'
        },
        {
            min: 28, 
            max: 32, 
            milligram: 15.625,
            children: '1 1/4 tsp (6.25ml)',
            chewable: '1 tablet or strip',
            capsule: 'N/A'
        },
        {
            min: 33, 
            max: 38, 
            milligram: 18.75,
            children: '1 1/2 tsp (7.5ml)',
            chewable: '1 tablet or strip',
            capsule: 'N/A'
        },
        {
            min: 39, 
            max: 43, 
            milligram: 21.875,
            children: '1 3/4 tsp (8.75ml)',
            chewable: '1 tablet or strip',
            capsule: 'N/A'
        },
        {
            min: 44, 
            max: 54, 
            milligram: 25,
            children: '2 tsp (10ml)',
            chewable: '2 tablets or strips',
            capsule: '1 tablet or capsule'
        },
        {
            min: 55, 
            max: 65, 
            milligram: 31.25,
            children: '2 1/2 tsp (12.5ml)',
            chewable: '2 tablets or strips',
            capsule: '1 tablet or capsule'
        },
        {
            min: 66, 
            max: 76, 
            milligram: 37.5,
            children: '3 tsp (15ml)',
            chewable: '3 tablets or strips',
            capsule: '1 tablet or capsule'
        },
        {
            min: 77, 
            max: 87, 
            milligram: 43.75,
            children: '3 1/2 tsp (17.5ml)',
            chewable: '3 tablets or strips',
            capsule: '1 tablet or capsule'
        },
        {
            min: 88, 
            max: 1600, 
            milligram: 50,
            children: '4 tsp (20ml)',
            chewable: '4 tablets or strips',
            capsule: '2 tablets or capsules'
        }
    ];




}(window);