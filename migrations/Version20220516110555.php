<?php

declare(strict_types=1);

namespace DoctrineMigrations;

use Doctrine\DBAL\Schema\Schema;
use Doctrine\Migrations\AbstractMigration;

/**
 * Auto-generated Migration: Please modify to your needs!
 */
final class Version20220516110555 extends AbstractMigration
{
    public function getDescription(): string
    {
        return '';
    }

    public function up(Schema $schema): void
    {
        // this up() migration is auto-generated, please modify it to your needs
        $this->addSql('CREATE TABLE url (id INT AUTO_INCREMENT NOT NULL, user_id INT DEFAULT NULL, hash VARCHAR(255) NOT NULL, link VARCHAR(255) NOT NULL, long_url VARCHAR(255) NOT NULL, domain VARCHAR(255) NOT NULL, created_at DATETIME NOT NULL, INDEX IDX_F47645AEA76ED395 (user_id), PRIMARY KEY(id)) DEFAULT CHARACTER SET utf8mb4 COLLATE `utf8mb4_unicode_ci` ENGINE = InnoDB');
        $this->addSql('CREATE TABLE url_statistic (id INT AUTO_INCREMENT NOT NULL, url_id INT NOT NULL, clicks INT DEFAULT NULL, date DATE NOT NULL, INDEX IDX_F09D1D7681CFDAE7 (url_id), PRIMARY KEY(id)) DEFAULT CHARACTER SET utf8mb4 COLLATE `utf8mb4_unicode_ci` ENGINE = InnoDB');
        $this->addSql('CREATE TABLE user (id INT AUTO_INCREMENT NOT NULL, email VARCHAR(180) NOT NULL, roles LONGTEXT NOT NULL COMMENT \'(DC2Type:json)\', password VARCHAR(255) NOT NULL, is_verified TINYINT(1) NOT NULL, UNIQUE INDEX UNIQ_8D93D649E7927C74 (email), PRIMARY KEY(id)) DEFAULT CHARACTER SET utf8mb4 COLLATE `utf8mb4_unicode_ci` ENGINE = InnoDB');
        $this->addSql('ALTER TABLE url ADD CONSTRAINT FK_F47645AEA76ED395 FOREIGN KEY (user_id) REFERENCES user (id)');
        $this->addSql('ALTER TABLE url_statistic ADD CONSTRAINT FK_F09D1D7681CFDAE7 FOREIGN KEY (url_id) REFERENCES url (id)');
    }

    public function down(Schema $schema): void
    {
        // this down() migration is auto-generated, please modify it to your needs
        $this->addSql('ALTER TABLE url_statistic DROP FOREIGN KEY FK_F09D1D7681CFDAE7');
        $this->addSql('ALTER TABLE url DROP FOREIGN KEY FK_F47645AEA76ED395');
        $this->addSql('DROP TABLE url');
        $this->addSql('DROP TABLE url_statistic');
        $this->addSql('DROP TABLE user');
    }
}
