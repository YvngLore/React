CREATE TABLE Alunni (
  Matricola INTEGER AUTO_INCREMENT,
  CodiceFiscale VARCHAR(16) NOT NULL,
  Nome  VARCHAR(20) NOT NULL,
  Cognome VARCHAR(20) NOT NULL,
  Eta INTEGER NOT NULL,
  PRIMARY KEY(Matricola)
);

INSERT INTO Alunni (CodiceFiscale, Nome, Cognome, Eta) VALUES
  ('ccff1', 'Alessio', 'Aldinucci', 18),
  ('ccff2', 'Tommaso', 'Bernat', 18), 
  ('ccff3', 'Alessio', 'Didilescu', 18),
  ('ccff4', 'Matteo', 'Falli', 18),
  ('ccff5', 'Alessandro', 'Gonzales', 19),
  ('ccff6', 'Riccardo', 'Grandi', 18), 
  ('ccff7', 'Niccolò', 'Masi', 18),
  ('ccff8', 'Rayan', 'Mohd', 18), 
  ('ccff9', 'Xhuliano', 'Molla', 19), 
  ('ccff10', 'Ardi', 'Ndreu', 18),
  ('ccff11', 'Anatolie', 'Pavlov', 20), 
  ('ccff12', 'Lorenzo', 'Rettori', 18),
  ('ccff13', 'Swaran', 'Singh', 20), 
  ('ccff14', 'Alessandro', 'Skvorstov', 18),
  ('ccff15', 'Lorenzo', 'Socci', 18),
  ('ccff16', 'Ammaar', 'Soliman', 18),
  ('ccff17', 'Lorenzo', 'Spagni', 18),
  ('ccff18', 'Samuele', 'Taiti', 18);
