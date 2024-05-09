import { Ioni } from '../Ioon';
import { AineKokkupanek } from '../AineKokkupanek';


test('Kas iooni omadused on õiged', () => {
    const naPositiivne: Ioni = { nimetus: "Na+", aatommassideSumma: 23, loeng: 1 };
    expect(naPositiivne.nimetus).toBe("Na+");
    expect(naPositiivne.aatommassideSumma).toBe(23);
    expect(naPositiivne.loeng).toBe(1);
    const no3Negatiivne: Ioni = { nimetus: "NO3-", aatommassideSumma: 62, loeng: -1 };
    expect(no3Negatiivne.nimetus).toBe("NO3-");
    expect(no3Negatiivne.aatommassideSumma).toBe(62);
    expect(no3Negatiivne.loeng).toBe(-1);
});

test('Õige aine (NaCl)', () => {
    const naPositiivne: Ioni = { nimetus: "Na+", aatommassideSumma: 23, loeng: 1 };
    const clNegatiivne: Ioni = { nimetus: "Cl-", aatommassideSumma: 35.5, loeng: -1 };
    const nacl = AineKokkupanek.kombineeri(naPositiivne, clNegatiivne);
    expect(nacl).not.toBeNull();
    expect(nacl!.nimetus).toBe("Na+Cl-");
    expect(nacl!.molekulmass).toBeCloseTo(58.5);
});
    
test('Õige aine (CaO)', () => {
    const caPositiivne: Ioni = { nimetus: "Ca2+", aatommassideSumma: 40, loeng: 2 };
    const oNegatiivne: Ioni = { nimetus: "O2-", aatommassideSumma: 16, loeng: -2 };
    const cao = AineKokkupanek.kombineeri(caPositiivne, oNegatiivne);
    expect(cao).not.toBeNull();
});

test('Vale aine (CaCl)', () => {
    const caPositiivne: Ioni = { nimetus: "Ca2+", aatommassideSumma: 40, loeng: 2 };
    const clNegatiivne: Ioni = { nimetus: "Cl-", aatommassideSumma: 35.5, loeng: -1 };
    const cacl = AineKokkupanek.kombineeri(caPositiivne, clNegatiivne);
    expect(cacl).toBeNull();
});

