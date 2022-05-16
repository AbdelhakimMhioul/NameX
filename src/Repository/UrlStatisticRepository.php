<?php

namespace App\Repository;

use App\Entity\Url;
use App\Entity\UrlStatistic;
use Doctrine\Bundle\DoctrineBundle\Repository\ServiceEntityRepository;
use Doctrine\Persistence\ManagerRegistry;
use function Doctrine\ORM\QueryBuilder;

/**
 * @method UrlStatistic|null find($id, $lockMode = null, $lockVersion = null)
 * @method UrlStatistic|null findOneBy(array $criteria, array $orderBy = null)
 * @method UrlStatistic[]    findAll()
 * @method UrlStatistic[]    findBy(array $criteria, array $orderBy = null, $limit = null, $offset = null)
 */
class UrlStatisticRepository extends ServiceEntityRepository
{
    public function __construct(ManagerRegistry $registry)
    {
        parent::__construct($registry, UrlStatistic::class);
    }

    public function findOneByUrl(Url $url): array
    {
        $qb = $this->createQueryBuilder('us');

        $result = $qb->innerJoin('us.url', 'u')
            ->where($qb->expr()->eq('u.id', $url->getId()))
            ->getQuery()
            ->getArrayResult();

        $data['labels'] = [];
        $data['datasets']['data'] = [];

        foreach ($result as $key => $item) {
            $formattedDate = $item['date']->format('M d');
            $result[$key]['date'] = $formattedDate;

            array_push($data['labels'], $formattedDate);
            array_push($data['datasets']['data'], $item['clicks']);
        }

        return $data;
    }
    // /**
    //  * @return UrlStatistic[] Returns an array of UrlStatistic objects
    //  */
    /*
    public function findByExampleField($value)
    {
        return $this->createQueryBuilder('u')
            ->andWhere('u.exampleField = :val')
            ->setParameter('val', $value)
            ->orderBy('u.id', 'ASC')
            ->setMaxResults(10)
            ->getQuery()
            ->getResult()
        ;
    }
    */

    /*
    public function findOneBySomeField($value): ?UrlStatistic
    {
        return $this->createQueryBuilder('u')
            ->andWhere('u.exampleField = :val')
            ->setParameter('val', $value)
            ->getQuery()
            ->getOneOrNullResult()
        ;
    }
    */
}
