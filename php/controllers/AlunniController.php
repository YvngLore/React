<?php
use Psr\Http\Message\ResponseInterface as Response;
use Psr\Http\Message\ServerRequestInterface as Request;

class AlunniController
{
  public function index(Request $request, Response $response, $args){
    $mysqli_connection = new MySQLi('my_mariadb', 'root', 'ciccio', 'scuola');
    $result = $mysqli_connection->query("SELECT * FROM Alunni");
    $results = $result->fetch_all(MYSQLI_ASSOC);

    $response->getBody()->write(json_encode($results));
    return $response->withHeader("Content-type", "application/json")->withStatus(200);
  }

  public function getAlunnoByMatricola(Request $request, Response $response, $args){
    $mysqli_connection = new MySQLi('my_mariadb', 'root', 'ciccio', 'scuola');
    $result = $mysqli_connection->query("SELECT * FROM Alunni WHERE Matricola = " . $args["matricola"]);
    $results = $result->fetch_all(MYSQLI_ASSOC);

    if(!$results){
      return $response->withStatus(404);
    }

    $response->getBody()->write(json_encode($results));
    return $response->withHeader("Content-type", "application/json")->withStatus(200);
  }

  public function insertAlunno(Request $request, Response $response, $args){
    $mysqli_connection = new MySQLi('my_mariadb', 'root', 'ciccio', 'scuola');

    $data = json_decode($request->getBody()->getContents(), true);

    $codice_fiscale = $data["CodiceFiscale"];
    $nome = $data["Nome"];
    $cognome = $data["Cognome"];
    $eta = intval($data["Eta"]);

    $sql = "INSERT INTO Alunni(CodiceFiscale, Nome, Cognome, Eta)
            VALUES('$codice_fiscale', '$nome', '$cognome', $eta)";

    $result = $mysqli_connection->query($sql);

    if(!$result){
      return $response->withStatus(405);
    }

    return $response->withHeader("Content-type", "application/json")->withStatus(201);
  }

  public function updateAlunno(Request $request, Response $response, $args){
    $mysqli_connection = new MySQLi('my_mariadb', 'root', 'ciccio', 'scuola');
    
    $data = json_decode($request->getBody()->getContents(), true);

    $matricola = $args["matricola"];
    $newNome = $data["Nome"];
    $newCognome = $data["Cognome"];

    $sql = "UPDATE Alunni
            SET Nome = '$newNome', Cognome = '$newCognome'
            WHERE Matricola = $matricola";

    $result = $mysqli_connection->query($sql);

    if(!result){
      return $response->withStatus(405);
    }    

    $sql = "SELECT * FROM Alunni
            WHERE Matricola = $matricola";

    $result = $mysqli_connection->query($sql);
    $results = $result->fetch_all(MYSQLI_ASSOC);

    $response->getBody()->write(json_encode($results));
    return $response->withHeader("Content-type", "application/json")->withStatus(201);
  }

  public function deleteAlunno(Request $request, Response $response, $args){
    $mysqli_connection = new MySQLi('my_mariadb', 'root', 'ciccio', 'scuola');

    $matricola = $args["matricola"];

    $sql = "DELETE FROM Alunni
            WHERE Matricola = $matricola";

    $result = $mysqli_connection->query($sql);

    if(!result){
      return $response->withStatus(405);
    }

    return $result->withStatus(201);
  }
}